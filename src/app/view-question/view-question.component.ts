import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {

  showMoreText = 'Show more..';
  @Input() question: any;
  @Input() allowEdit: boolean;
  @Output() viewToggled = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute, private service: QuestionsService) {
    this.showMoreText = 'Show more..';  
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

  toggleView() {
    this.viewToggled.emit(true);
  }

  deleteQuestion() {
    this.service.deleteQuestion(this.question.key);
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section' + this.question.key).innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <!-- Add the theme's stylesheet -->
        <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.bubble.css">
        
        <script src="//cdn.quilljs.com/1.3.6/quill.js"></script>
        
          <style>
          button{
            visibility: hidden;
          }

          .hidden{
            visibility: hidden;
          }
          
          .visible{
            visibility: visible;
          }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}

