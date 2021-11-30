import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'user';
  user: Promise<unknown> | undefined;

  constructor(public data: UserService) {
  }

  ngOnInit(): void {
    console.log(this.data.register({"firstName": "testwork2", "lastName": "testlastname22", "id": 0}))
  }
}
