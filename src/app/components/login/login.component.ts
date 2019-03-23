import { Component, OnInit } from '@angular/core';
import { fbind } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginStatus = "logged in?";

  updateLoginStatus() {
    this.loginStatus += '?';
  }

}
