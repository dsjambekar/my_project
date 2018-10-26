import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Repository';
  isUserLoggedIn: boolean;
  user: any;
  constructor(public authService: AuthService) {
  }

  ngOnInit() { }

  onLoginChange(user: any) {
    this.user = user;
    // this.userService.addNode(this.user);
  }

  login() {
    this.authService.loginWithGoogle();
    this.isUserLoggedIn = true;
  }

  logout() {
    this.authService.logout();
    this.isUserLoggedIn = false;
  }



}
