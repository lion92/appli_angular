import { Component, OnInit, Input} from '@angular/core';
import{FormBuilder, FormGroup} from '@angular/forms';
import {User} from "../User";
import {UserService} from "../user.service";
import{ListUserComponent} from "../list-user/list-user.component"
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],

})
export class AddComponent implements OnInit {
 userForm:FormGroup;
 lastName="";
 firstName="";
 valueFirstName="";
 valueLastName="";
 userToSend:User;
   @Input() lastNameInput=this.data.getUser().lastName;

   @Input() firstNameInput=this.data.getUser().firstName;

  constructor(  private fb:FormBuilder, public data: UserService) { }


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

 this.data.register(this.userToSend);



 }


}
