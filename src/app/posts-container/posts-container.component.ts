import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {  AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { BlogService } from '../shared/blog.service';
import { Post } from '../shared/module/post';


@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {

  public posts: Observable<Post[][]>;

  constructor(private service:BlogService ) {
      this.posts = service.getAllPosts().valueChanges();
  }


  ngOnInit() {
  }

}
