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
 private recupUser:User;
  constructor(public data: UserService) {

  }

  ngOnInit(): void {
    this.data.getUsers().then((response) => {
      this.users=response;
    }).catch(e => {
      console.log(e);
    });
  }

  edit(user:User){
  this.recupUser=user;
  console.log(user);
  this.data.setRecupUser(user);
  }



    setRecupUser(user:User){
      this.recupUser= user;
    }

    getUser(){
      let tempUser = this.recupUser;
      this.clearUser();
      return tempUser;
    }

    clearUser(){
      this.recupUser = {lastName:"", firstName:"", id:0};
    }

}

