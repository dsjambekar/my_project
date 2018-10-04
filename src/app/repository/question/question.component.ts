import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { QuestionsService } from '../../shared/questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public question$: any;

  constructor(private route: ActivatedRoute,
    private router: Router, private service: QuestionsService) {
    }

  ngOnInit() {
    this.question$ = this.service.getQuestionByKey(this.route.snapshot.paramMap.get('key'));
  }
}


