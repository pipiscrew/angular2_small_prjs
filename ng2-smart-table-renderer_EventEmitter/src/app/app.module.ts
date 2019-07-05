import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { UserlContextRenderComponent } from 'src/app/user-contextrender';
import { UserMComponent } from 'src/app/modal/user-m';

@NgModule({
  declarations: [
    AppComponent,UserlContextRenderComponent,UserMComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    Ng2SmartTableModule
  ],
  providers: [],
  entryComponents: [UserlContextRenderComponent,UserMComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
