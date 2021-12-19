import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../User";
import {UserService} from "../user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: any=null;
  constructor(public data: UserService) {

  }

  ngOnInit(): void {
    this.data.getUsers().then((response) => {
      this.users=response;
    }).catch(e => {
      console.log(e);
    });
  }

}

