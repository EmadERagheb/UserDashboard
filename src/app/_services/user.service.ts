import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { UserParams } from '../_models/user-params';
import { PaginatedResult } from '../_models/pagination';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersEndPoint = environment.APIURL + '/users';
  private http = inject(HttpClient);
  paginatedResult = signal<PaginatedResult<User[]> | null>(null);
  cashedResult = new Map<string, PaginatedResult<User[]>>();
  getAllUsers(userParams: UserParams) {
    if (this.cashedResult.has(Object.values(userParams).join('-')))
      return this.paginatedResult.set(
        this.cashedResult.get(Object.values(userParams).join('-'))!
      );
    let params = new HttpParams();
    params = params.append('page', userParams.page);
    params = params.append('per_page', userParams.per_page);
    return this.http
      .get<PaginatedResult<User[]>>(this.usersEndPoint, { params })
      .subscribe({
        next: (data) => {
          this.paginatedResult.set(data);
          this.cashedResult.set(Object.values(userParams).join('-'), data);
        },
      });
  }
  getUser(id: string) {
    return this.http.get<{ data: User }>(this.usersEndPoint + `/${id}`);
  }
}
