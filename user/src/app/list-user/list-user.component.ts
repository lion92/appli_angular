import {  Input, Injectable,Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../User";
import {UserService} from "../user.service";

@Injectable
({
  providedIn: 'root'
})

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  @Input() users: any=null;
 private recupUser:User;
  constructor(public data: UserService) {

  }

  ngOnInit(): void {
  /*
    this.data.getUsers().then((response) => {
      this.users=response;
    }).catch(e => {
      console.log(e);
    });*/
    this.data.getUsers$().subscribe((data:User[])=>{
    console.log("test32");
    console.log(data);
    this.users=data
    })

  }

  refresh(){
  console.log("ok");
    this.data.getUsers().then((response) => {
        this.users=response;
      }).catch(e => {
        console.log(e);
      });
  }

ngOnChange(){
this.data.getUsers().then((response) => {
      this.users=response;
      console.log(this.users);

    }).catch(e => {
      console.log(e);
    });

}
changeData(): void {

    this.data.getUsers().then((response) => {
      this.users=response;
      console.log(this.users);

    }).catch(e => {
      console.log(e);
    });

  }




  edit(user:User){
  this.recupUser=user;
  console.log(user);
  this.data.setRecupUser(user);
  }

setUsers(users:any){
this.users=users;
}


}

