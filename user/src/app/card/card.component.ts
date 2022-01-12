import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup} from '@angular/forms';
import {User} from "../User";
import {UserService} from "../user.service";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 userForm:FormGroup;
 lastName="";
 firstName="";
 userToSend:User;

  constructor(private fb:FormBuilder, public data: UserService) { }

  ngOnInit(): void {
  this.userForm=this.fb.group({
  lastName:[],
  firstName:[]

  })
  }
 onSubmit(){
 this.userToSend={
  lastName:this.userForm.value.lastName,
  firstName:this.userForm.value.firstName,
  id:0
 }
 console.log(this.userToSend);
 this.data.register(this.userToSend);
 console.log(this.userForm.value.lastName);
 }

}
