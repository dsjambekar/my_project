import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {
    AuthService,
    GoogleLoginProvider,
} from 'angular-6-social-login';
import { SessionService } from '../shared/session.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  public hasUserSignedIn = false;
  public socialPlatformProvider =  GoogleLoginProvider.PROVIDER_ID;
  constructor( private socialAuthService: AuthService, private sessionService: SessionService ) {}

  @Output() signedInOrOut = new EventEmitter<any>();

  public socialSignIn() {

    this.socialAuthService.signIn(this.socialPlatformProvider).then(
      (userData) => {
        this.sessionService.saveInLocal('userData', userData);
        this.hasUserSignedIn = true;
        this.signedInOrOut.emit(userData);
      });

  }

  public socialSignOut() {
        this.sessionService.saveInLocal('userData', null);
        this.hasUserSignedIn = false;
        this.signedInOrOut.emit(null);
    }


  ngOnInit() {
  }

}
