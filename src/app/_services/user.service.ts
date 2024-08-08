import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { UserParams } from '../_models/user-params';
import { PaginatedResult } from '../_models/pagination';
import { map, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersEndPoint = environment.APIURL + '/users';
  private http = inject(HttpClient);
  private cashedResult = new Map<string, PaginatedResult<User[]>>();
  private cashedSearchedUsers: User[] = [];
  paginatedResult = signal<PaginatedResult<User[]> | null>(null);
  userParams = signal<UserParams>(new UserParams());
  getAllUsers() {
    
    if (this.cashedResult.has(Object.values(this.userParams()).join('-')))
      return this.paginatedResult.set(
        this.cashedResult.get(Object.values(this.userParams()).join('-'))!
      );
    let params = new HttpParams();
    params = params.append('page', this.userParams().page);
    params = params.append('per_page', this.userParams().per_page);
    return this.http
      .get<PaginatedResult<User[]>>(this.usersEndPoint, { params })
      .subscribe({
        next: (data) => {
          this.paginatedResult.set(data);
          this.cashedResult.set(Object.values(this.userParams()).join('-'), data);
        },
      });
  }
  getUser(id: string) {
    let user: User | undefined = [...this.cashedResult.values()]
      .reduce((acc: User[], response) => {
        return response.data ? acc.concat(response.data) : acc;
      }, [])
      .find((u: User) => u.id == +id);
    if (user) return of(user);
    user = this.cashedSearchedUsers.find((x) => x.id == +id);
    if (user) return of(user);

    return this.http.get<{ data: User }>(this.usersEndPoint + `/${id}`).pipe(
      map((data) => {
        this.cashedSearchedUsers.push(data.data);
        return data.data;
      }),
      shareReplay()
    );
  }
}
