import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../shared/module/post';
import { BlogService } from '../../shared/blog.service';
import { QuestionsService } from '../../shared/questions.service';
import { Question } from '../../shared/module/question';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public questions: Observable<Question[][]>;

  // constructor(private service: BlogService ) {
  //     this.posts = this.service.getAllPosts().valueChanges();
  // }

  constructor(private service: QuestionsService ) {
    this.questions = this.service.getAllQuestions();
}

  ngOnInit() {
  }

}
