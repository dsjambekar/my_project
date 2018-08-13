import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../shared/module/post';
import { BlogService } from '../../shared/blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public posts: Observable<Post[][]>;

  constructor(private service:BlogService ) {
      this.posts = this.service.getAllPosts().valueChanges();
  }

  ngOnInit() {
  }

}
