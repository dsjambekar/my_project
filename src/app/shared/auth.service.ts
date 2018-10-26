import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
   userDetails: firebase.User = null;
   private _user = new BehaviorSubject(undefined);
   public readonly userr = this._user.asObservable();

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
    this._user.next(afAuth.authState);

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          // console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    this.afAuth.auth.signInWithPopup(provider);
  }

  logout() {
    // this.afAuth.auth.signOut();
    this.afAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }

  getUser() {
    return this._user.getValue();
  }

}
