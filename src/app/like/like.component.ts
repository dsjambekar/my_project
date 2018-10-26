import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  liked = false;
  btnText = 'Like';
  @Input() question: any;
  user: any;

  constructor(private service: QuestionsService,private authService: AuthService) {
    authService.getUser().subscribe(
      user => {
        this.user = user;
      }
    );
  }

  ngOnInit() {
  }

  toggleLike() {

    if (this.user === null) {
      alert('Please log in before you like any question.');
      return;
    }
    this.liked = !this.liked;
    if (this.liked) {
      this.btnText = 'Liked';
    } else {
      this.btnText = 'Like';
    }
    this.service.likeThisQuestion(this.question.key, this.user.uid, this.liked);

  }

}
