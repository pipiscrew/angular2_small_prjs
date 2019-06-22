import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component'; 
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { AuthModule } from 'src/app/auth/auth.module';
import { LogoutComponent } from 'src/app/components/logout/logout.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AdminComponent } from 'src/app/components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    LogoutComponent,
    HomeComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SmartTableModule
  ],
  exports : [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
