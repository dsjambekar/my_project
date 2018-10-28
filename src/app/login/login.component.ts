import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<any>();

  constructor(public AuthService: AuthService) {
    // subscribe to the router events - storing the subscription so
   // we can unsubscribe later. 
   
   }

  ngOnInit() {
  }

  login(){
    this.AuthService.loginWithGoogle();
    this.loggedIn.emit(this.AuthService.user);
  }

  logout(){
    this.AuthService.logout();
    this.loggedIn.emit(null);

  }

}
