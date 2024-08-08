import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { UserParams } from '../../_models/user-params';
import { UserCardComponent } from '../user-card/user-card.component';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import {
  AbstractControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { PaginationHeaderComponent } from '../../pagination-header/pagination-header.component';
import { debounceTime, map, switchMap, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    PaginationModule,
    UserCardComponent,
    FormsModule,
    NgIf,
    PaginationHeaderComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  private fb = inject(FormBuilder);
  searchForm = this.fb.group({ userId: [] });
  firstRun = true;

  router = inject(Router);
  pageChanged(event: PageChangedEvent) {
    if (this.userParams.page !== event.page) {
      this.userParams.page = event.page;
      this.loadUsers();
    }
  }
  userService = inject(UserService);
  users: User[] = [];
  userParams = new UserParams();

  ngOnInit(): void {
    this.loadUsers();
    this.navigateToUserDetail();
  }
  loadUsers() {
    this.userService.getAllUsers(this.userParams);
  }

  onSearch() {
    this.navigateToUserDetail();
  }
  navigateToUserDetail() {
    this.searchForm.controls['userId'].valueChanges
      .pipe(debounceTime(1000), take(1))
      .subscribe({
        next: () => {
          if (this.searchForm.controls['userId'].value) {
            console.log(this.searchForm.controls['userId'].value);
            this.router.navigate([
              `/users/${this.searchForm.controls['userId'].value}`,
            ]);
          }
        },
      });
  }
}
