import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: any;
  @Input() allowEdit: boolean;
  showEdit = false;

  constructor() { }

  ngOnInit() {
  }

  onViewToggled(showEdit: boolean) {
    this.showEdit = showEdit;
  }
}
