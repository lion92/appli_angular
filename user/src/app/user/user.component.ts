import { Component, OnInit } from '@angular/core';
import {User} from "../User";
import {UserService} from "../user.service";
@Component({
  selector: 'app-user',
  templateUrl: '../user/user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   getBonjour="Bonjour!";
    title = 'user';

  // @ts-ignore
  users: User[];
  constructor(public data: UserService) { }

  ngOnInit(): void {
  this.data.getUsers().then(data=>{
    this.users=data;
    console.log("/////"+this.users);
  })}

}
