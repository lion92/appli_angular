import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ListUserComponent } from './list-user/list-user.component';
import { UserComponent } from './user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';
import { DetailuserComponent } from './detailuser/detailuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent, UserComponent, AddComponent, DetailuserComponent, PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, NgbModule, ReactiveFormsModule, BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
