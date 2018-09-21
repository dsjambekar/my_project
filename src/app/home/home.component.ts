import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: QuestionsService) { }

  todos$: Observable<any[]>;

  ngOnInit() {
     this.todos$ = this.service.getAllQuestions();
  }

}
