import { Component, OnInit  } from '@angular/core';
import { Post } from '../../shared/module/post';
import { BlogService } from '../../shared/blog.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {ChangeDetectorRef} from '@angular/core';
import { QuestionsService } from '../../shared/questions.service';

declare var myExtObject: any;
declare var webGlObject: any;

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public questionType = 'QA';
  public question = 'Question text here';
  public difficulty = 1;
  public numberOfOptions = 4;
  public options: any;
  public optionType = 1;
  public answer: any;
  public explanation: any;
  public selectedTab = 'question';

  constructor(private route: ActivatedRoute, private service: BlogService , private ref: ChangeDetectorRef,
    private questionService: QuestionsService) {
   }

  ngOnInit() {

this.options = [
  'Sentence 1',
  'Sentence 2',
  'Sentence 3',
  'Sentence 4 ',
];
  }

  myFunction(){
    // console.log(this.myContent);
    // this.service.updatePostBySlug(this.slug, this.myContent);
    // this.questionService.addNewQuestion(this.myContent, this.questionType);

  }

  tabChanged(tabName:string){
    this.selectedTab = tabName;
  }

  onNumberOfOptionsChanged(){
      this.options = [];
      for (let i = 0; i < this.numberOfOptions; i++) {
        let option = 'option ' + i;
        this.options.push(option);
    }
  }

}
