import {Injectable, NgModule} from '@angular/core';
import { User } from '../app/User';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

@Injectable
({
  providedIn: 'root'
})

export class UserService{

  url: string = "http://localhost:8082/demo";
 private recupUser:User;

  constructor(private http: HttpClient) {
  }
  register(user: User) {
    return new Promise((resolve, rejects) => {
      this.http.post(this.url + '/users', user).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  getUsersByid(id: number) {
    return new Promise((resolve, rejects) => {
      this.http.get(this.url + '/users/'+ id).subscribe((data: any) => {
          resolve(data);
      });
    });
  }



  getUsers():Promise<User[]> {
    return new Promise<User[]>((resolve, rejects) => {
      this.http.get(this.url + '/users').subscribe((data: any) => {
       resolve(data);
      });
    });
  }

  updateUser(id:number,user: User) {
    return new Promise((resolve, rejects) => {
      this.http.put(this.url + '/users/'+id, user).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  deleteUser(id:number) {
      return new Promise((resolve, rejects) => {
        this.http.delete(this.url + '/users/'+id).subscribe((data: any) => {
          resolve(data);
        });
      });
    }

 setRecupUser(user:User){
      this.recupUser= user;
    }

    getUser(){
      if(this.recupUser===undefined){
      this.recupUser = {lastName:"", firstName:"", id:0};
      }
      console.log(this.recupUser);
      return this.recupUser;
    }




}
