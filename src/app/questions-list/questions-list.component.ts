import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import { map } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';
import { AngularFireList } from 'angularfire2/database';
import { Question } from '../shared/module/question';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  @Input() questions: any;
  @Input() allowEdit: boolean;
  user: any;

  constructor(private questionService: QuestionsService, private authService: AuthService) {
  }

  ngOnInit() {

    this.authService.getUser().subscribe(
      user => {
        this.user = user;
      }
    );
  }

  deleteAllQuestions(){
    this.questionService.deleteAll();
  }

}
