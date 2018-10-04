import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  questions: any;

  constructor(private questionService: QuestionsService) { }

  ngOnInit() {
    this.getQuestionsList();
  }

  getQuestionsList() {
    // Use snapshotChanges().map() to store the key
    this.questionService.getAllQuestions().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(questions => {
      this.questions = questions;
    });
  }

  // deleteAllQuestions() {
  //   this.questionService.deleteAll();
  // }
}
