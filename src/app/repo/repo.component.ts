import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { QuestionsService } from '../shared/questions.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  private user: any;
  private questions: any;

  constructor(private authService: AuthService, private questionService: QuestionsService) {
    this.authService.getUser().subscribe(
      user => {
        this.user = user;
        this.getQuestionsList();
      }
    );

  }

  ngOnInit() {
  }

  getQuestionsList() {
    this.questionService.getAllQuestionsByUser(this.user).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(questions => {
      this.questions = questions;
    });
  }

}
