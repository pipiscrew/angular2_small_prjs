import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UserService } from 'src/app/auth/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule  
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService
  ],
  exports : []
})
export class AuthModule { }
