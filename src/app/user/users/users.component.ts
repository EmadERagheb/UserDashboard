import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { UserParams } from '../../_models/user-params';
import { UserCardComponent } from '../user-card/user-card.component';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [PaginationModule, UserCardComponent, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
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
  }
  loadUsers() {
    this.userService.getAllUsers(this.userParams);
  }
}
