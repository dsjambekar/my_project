import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Question } from '../shared/module/question';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private service: QuestionsService) { }

  todos$: any;

  ngOnInit() {
     this.service.getAllPublicQuestions().snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        ).subscribe(questions => {
          this.todos$ = questions;
        });
  }

}
