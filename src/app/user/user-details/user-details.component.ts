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

  user?: User;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (data) => {
        this.user = data['user'];
      },
    });
  }

  goBack() {
    history.back();
  }
}
