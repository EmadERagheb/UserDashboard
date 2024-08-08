import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './user/users/users.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { userDetailResolver } from './_resolvers/user-detail.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
    resolve: { user: userDetailResolver },
  },
  { path: '*', redirectTo: 'home', pathMatch: 'full' },
];
