import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../shared/module/post';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../shared/blog.service';
import { Params } from '@angular/router';
import { AngularFireList } from 'angularfire2/database';

import { switchMap } from 'rxjs/operators';

import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  public post$:  Observable<Post[][]>;
  slug:string;
 constructor(private route: ActivatedRoute, private service: BlogService,private meta: Meta) {


  }
  //(param=> this.service.findPostBySlug(param['slug']));
  
  ngOnInit() {

    this.route.url.subscribe(params => {
      console.log(params[0].path);
      this.post$ = this.service.findPostBySlug(params[0].path).valueChanges();
    })

    this.meta.addTag({ name: 'description', content: 'How to use Angular 4 meta service' },true);
    this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
  }

  
}
