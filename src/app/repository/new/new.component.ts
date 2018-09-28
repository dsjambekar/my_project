import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/module/post';
import { BlogService } from '../../shared/blog.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { QuestionsService } from '../../shared/questions.service';

import { FormBuilder, FormGroup,  FormArray,  Validators, FormControl } from '@angular/forms';
import { Question } from '../../shared/module/question';
import { AuthService } from '../../shared/auth.service';

declare var myExtObject: any;
declare var webGlObject: any;

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  public _question: Question;
  // public questionType = 'QA';
  // public question = '';
  // public difficulty = 1;
  public numberOfOptions = 4;
  // public options: any;
  // public optionType = '';
  // public answer: any;
  // public explanation: any;
  public selectedTab = 'question';
  public categoryList: string[];
  public difficultyList: string[];
  public optionTypeList: string[];

  constructor(private route: ActivatedRoute, private service: BlogService, private ref: ChangeDetectorRef,
    private questionService: QuestionsService, private formBuilder: FormBuilder, public AuthService: AuthService) {
  }

  ngOnInit() {

    this.categoryList = ['VA', 'QA', 'LR', 'DI'];
    this.difficultyList = ['Easy', 'Medium', 'Hard'];
    this.optionTypeList = ['Single', 'Multiple'];

    this.registerForm = this.formBuilder.group({
      question_body: ['', Validators.required],
      category: ['QA'],
      difficulty: ['Easy'],
      option_type: ['Single'],
      explanation_body: ['', Validators.required],
      // options: this.formBuilder.array([
      //   this.formBuilder.control('', Validators.required),
      //   this.formBuilder.control('', Validators.required),
      //   this.formBuilder.control('', Validators.required),
      //   this.formBuilder.control('', Validators.required)
      // ])
      options: this.formBuilder.array([
        this.initOption(),
        this.initOption(),
        this.initOption(),
        this.initOption()
    ])
    });


  }

  get f() { return this.registerForm.controls; }

  get options() {
    return this.registerForm.get('options') as FormArray;
  }


  addOptions() {
    // this.options.push(this.formBuilder.control('', Validators.required));

     // add address to the list
     const control = <FormArray>this.registerForm.controls['options'];
     control.push(this.initOption());
  }

  initOption() {
    // initialize our address
    return this.formBuilder.group({
      option_body: ['', Validators.required],
      is_correct: [true]
    });
}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert('Please enter all the values.');
      return;
    }

     this._question = this.registerForm.value;

     console.log(this.AuthService.getUser());


     this.AuthService.getUser().subscribe(data => {
      this._question.created_by = data.uid;
    });

    this._question.created_at = Date.now();

    console.log(this._question);

    this.questionService.addNewQuestion(this._question);

    alert('SUCCESS!! :-)');
  }

  myFunction() {
    // console.log(this.myContent);
    // this.service.updatePostBySlug(this.slug, this.myContent);
    // this.questionService.addNewQuestion(this.myContent, this.questionType);

  }

  tabChanged(tabName: string) {
    this.selectedTab = tabName;
  }

  onNumberOfOptionsChanged() {
    // this.options = [];

    for (let i = 0; i < 5; i++) {
      this.options.removeAt(0);
    }

    for (let i = 0; i < this.numberOfOptions; i++) {
      // let option = '';
      // this.options.push(option);
      // this.registerForm.addControl(i.toString(), new FormControl('', Validators.required));
      this.addOptions();
    }
  }

}
