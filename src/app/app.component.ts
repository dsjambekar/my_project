import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { SessionService } from './shared/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Repository';
  public userdata:any;
  public hasUserSignedIn= false;


  items: Observable<any[]>;
  constructor(db: AngularFirestore,private sessionService: SessionService) {
    this.items = db.collection('posts').valueChanges();
  }

  checkIfUserSignedIn(userdata:any){
    // if(this.sessionService.getFromLocal('userData')){
    //   this.userdata = this.sessionService.getFromLocal('userData')
    //   return true;
    // } else {
    //   return false;
    // }
    if(userdata){
      this.hasUserSignedIn = true;
      this.userdata = userdata;
    } else if(userdata==null){
      this.hasUserSignedIn = false;
      this.userdata = null;

    }

    //return signedIn;
  }

}
