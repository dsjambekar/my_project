import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/module/post';
import { BlogService } from '../../shared/blog.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {ChangeDetectorRef} from '@angular/core';

declare var myExtObject: any;
declare var webGlObject: any;

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public myContent : string;
  public post: Observable<Post[][]>;
  slug:string;

  constructor(private route: ActivatedRoute,private service:BlogService ,private ref:ChangeDetectorRef) {
     this.myContent = 'Here will come all my content.';
   }

  ngOnInit() {
    this.myContent = 'New content here';
    this.route.url.subscribe(params => {
      console.log('Param: ',params[0].path);
      this.service.findPostBySlug(params[0].path).valueChanges().subscribe((data) => {

       // setTimeout( ()=> this.myContent = 'data: ' + data[0]['post_body'],0);
       setTimeout( () => this.myContent = data[0]['post_body'], 0);
       console.log(this.myContent);
       this.ref.detectChanges();
      });
      console.log(this.myContent);

    })

  }

  myFunction(){
   myExtObject.func1();
  }
}
