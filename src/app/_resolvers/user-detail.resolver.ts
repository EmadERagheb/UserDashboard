import { ResolveFn } from '@angular/router';
import { User } from '../_models/user';
import { inject } from '@angular/core';
import { UserService } from '../_services/user.service';

export const userDetailResolver: ResolveFn<User|null> = (route, state) => {
 const userService= inject(UserService);
 const userId =  route.paramMap.get('id');
 if(!userId) return null;
 return userService.getUser(userId)
 
};
