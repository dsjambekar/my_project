import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
  private userSource = new Subject<firebase.User>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();
  user$ = this.userSource.asObservable();

  constructor(public afAuth: AngularFireAuth) {
    // this.userSource.next(afAuth.authState);

    this.userSource.subscribe(
      (user) => {
        if (user) {
          this.userSource.next(user);
          // console.log(this.userDetails);
        } else {
          this.userSource = null;
        }
      }
    );
}

  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }

}
