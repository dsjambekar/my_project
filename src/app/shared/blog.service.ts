import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Post } from './module/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  findPostBySlug(slug: string):  AngularFireList<Post[]> {
    return this.db.list('/posts',ref=>ref.orderByChild('slug')
     .equalTo(slug).limitToFirst(1)
    )
  }
  constructor(private db: AngularFireDatabase) { }

  getAllPosts(): AngularFireList<Post[]> {
    return this.db.list('/posts', ref=>ref.orderByChild('is_page').equalTo(false).limitToFirst(10));
  }

  getAllPages(): AngularFireList<Post[]> {
    return this.db.list('/posts', ref=>ref.orderByChild('is_page').equalTo(true).limitToFirst(10));
  }

}

