import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TestService } from '../shared/test.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.css']
})
export class ChildTestComponent implements OnDestroy {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;
  user: any;


  constructor(private missionService: TestService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
    });

    this.subscription = missionService.user$.subscribe(
      u => {
        this.user = u;
      });
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
