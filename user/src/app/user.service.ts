import {Injectable, NgModule} from '@angular/core';
import { User } from '../app/User';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

@Injectable
({
  providedIn: 'root'
})

export class UserService{


  url: string = "http://localhost:8082/demo";


  constructor(private http: HttpClient) {
  }
  register(user: User) {
    return new Promise((resolve, rejects) => {
      this.http.post(this.url + '/users', user).subscribe((data: any) => {
        (!data.success) ? rejects(data.message): resolve(data);
      });
    });
  }


}
