import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/module/post';
import { BlogService } from '../../shared/blog.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { QuestionsService } from '../../shared/questions.service';

import { FormBuilder, FormGroup,  FormArray,  Validators, FormControl } from '@angular/forms';

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

  public questionType = 'QA';
  public question = '';
  public difficulty = 1;
  public numberOfOptions = 4;
  public options: any;
  public optionType = 1;
  public answer: any;
  public explanation: any;
  public selectedTab = 'question';

  constructor(private route: ActivatedRoute, private service: BlogService, private ref: ChangeDetectorRef,
    private questionService: QuestionsService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      fQuestion: ['', Validators.required],
      fCorrectAnswer: ['', Validators.required],
      fExplanation: ['', Validators.required],
      aliases: this.formBuilder.array([
        this.formBuilder.control('', Validators.required),
        this.formBuilder.control('', Validators.required),
        this.formBuilder.control('', Validators.required),
        this.formBuilder.control('', Validators.required)
      ])
    });

    this.options = [
      'Sentence 1',
      'Sentence 2',
      'Sentence 3',
      'Sentence 4 ',
    ];
  }

  get f() { return this.registerForm.controls; }

  get aliases() {
    return this.registerForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control('', Validators.required));
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

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
    this.options = [];

    for (let i = 0; i < 5; i++) {
      this.aliases.removeAt(0);
    }

    for (let i = 0; i < this.numberOfOptions; i++) {
      let option = '';
      this.options.push(option);
      // this.registerForm.addControl(i.toString(), new FormControl('', Validators.required));
      this.addAlias();
    }
  }

}
