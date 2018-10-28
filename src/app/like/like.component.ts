import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import { AuthService } from '../shared/auth.service';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit  {

  liked = false;
  btnText = 'Like';
  private _question: any;
  user: any;
  likeKey: string;
  likedByUser: any;

  constructor(private service: QuestionsService,private authService: AuthService) {
  }

  get question(): any {
    // transform value for display
    return this._question;
  }
  
  @Input()
  set question(question: any) {
    this._question = question;
  }

  ngOnInit() {
    // let qKey = this._question.key;
    this.authService.getUser().subscribe(
      user => {
        this.user = user;
        let list = this.service.getLikedQuestionsByUser(this.user.uid)
        .snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        )
          .subscribe((items) => {
            items.forEach((item) => {
              if(item.question_ids === this.question.key){
                this.btnText = 'Liked';
                this.liked = true;
                this.likeKey = item.key;
                console.log(this.likeKey);
              }
            })
          })
      }
    );
  }

  toggleLike() {

    if (this.user === null) {
      alert('Please log in before you like any question.');
      return;
    }
    this.liked = !this.liked;
    if (this.liked) {
      this.btnText = 'Liked';
      this.likeKey = this.service.likeThisQuestion(this.question.key, this.user.uid, this.liked);
    } else {
      this.btnText = 'Like';
      this.service.unlikeThisQuestion(this.likeKey);
    }

  }

}
