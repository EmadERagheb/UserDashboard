import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  userService = inject(UserService);
  user?: User;
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) this.loadUser(id);
  }
  loadUser(id: string) {
    this.userService.getUser(id).subscribe({
      next: (data) => (this.user = data.data),
    });
  }
  goBack() {
    history.back();
  }
}
