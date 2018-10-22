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
  constructor(public AuthService: AuthService) {

    // AuthService.user$.subscribe(
    //   u => {
    //     this.user = u;
    //     console.log(u);

    //   });
   }

   ngOnInit() {  }

   onLoginChange(user: any) {
     this.user = user;
     // this.userService.addNode(this.user);
   }

  login(){
    this.AuthService.loginWithGoogle();
    this.isUserLoggedIn = true;
  }

  logout(){
    this.AuthService.logout();
    this.isUserLoggedIn = false;
  }



}
