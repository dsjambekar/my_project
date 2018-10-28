import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { QuestionsService } from '../shared/questions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:any;
  questionsCreated: Observable<number>;
  questionsLiked: Observable<number>;

  constructor(private authService:AuthService, private service:QuestionsService) { 
    this.authService.getUser().subscribe(
      user => {
        this.user = user;
        this.questionsCreated = this.service.getAllQuestionsByUser(this.user).snapshotChanges()
        .map(changes => {
          return changes.map(c => (
              { 
                  key: c.payload.key,
                  ...c.payload.val(),
              }
          )).length; // Eventually return the length
      });
      this.questionsLiked = this.service.getLikedQuestionsByUser(this.user.uid).snapshotChanges()
        .map(changes => {
          return changes.map(c => (
              { 
                  key: c.payload.key,
                  ...c.payload.val(),
              }
          )).length; // Eventually return the length
      });
      }
    );
  }

  ngOnInit() {
  }

}
