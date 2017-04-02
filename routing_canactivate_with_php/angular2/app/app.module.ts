import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AuthGuard } from './app.routing.guard.service';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
	LoginComponent,
	HomeComponent	
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RoutingModule,
  ],
  providers: [AuthGuard, LoginService ], //we declare it here, otherwise is not visible at app.routing.guard.service.ts
  bootstrap: [AppComponent]
})
export class AppModule {
 }
