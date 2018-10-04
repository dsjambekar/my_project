import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../shared/questions.service';
import { Question } from '../shared/module/question';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  showMoreText = 'Show more..';
  @Input() question: Question;

  constructor(private route: ActivatedRoute, private service: QuestionsService) {
  }

  ngOnInit() {
  }

  toggleText() {
    if (this.showMoreText === 'Show more..') {
      this.showMoreText = 'Show less';
    } else {
      this.showMoreText = 'Show more..';
    }
  }
}