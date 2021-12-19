import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./User";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'user';

  // @ts-ignore
  users: User[];



  constructor(public data: UserService) {

  }

  ngOnInit(): void {
  this.data.getUsers().then(data=>{
  this.users=data;
  console.log("/////"+this.users);
  });

  }

 }








