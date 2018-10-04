import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../shared/module/post';
import { BlogService } from '../../shared/blog.service';
import { QuestionsService } from '../../shared/questions.service';
import { Question } from '../../shared/module/question';
import { AngularFireList } from 'angularfire2/database';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public questions: any;

  constructor(private service: QuestionsService ) {
}

  ngOnInit() {
    this.getQuestionsList();
  }

  getQuestionsList() {
    // Use snapshotChanges().map() to store the key
    this.service.getAllQuestions().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(questions => {
      this.questions = questions;
    });
  }

  deleteQuestion(key: string) {
    this.service.deleteQuestion(key);
  }

}
