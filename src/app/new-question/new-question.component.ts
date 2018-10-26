import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';

import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user: any;

  public _question: any;
  public options_required = true;
  public option_type = 'Single';

  public numberOfOptions = 4;

  public selectedTab = 'question';
  public categoryList: string[];
  public difficultyList: string[];
  public optionTypeList: string[];

  constructor(   private questionService: QuestionsService, private formBuilder: FormBuilder, public authService: AuthService) {

    this.authService.getUser().subscribe(
      user => {
        this.user = user;
      }
    );
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      question_body: ['', Validators.required],
      category: '',
      difficulty: '',
      is_public: false,
      options_required: true,
      created_at: '',
      created_by_id: '',
      created_by_name: '',
      option_type: [this.option_type],
      explanation_body: ['', Validators.required],
      options: this.formBuilder.array([
        this.initOption(),
        this.initOption(),
        this.initOption(),
        this.initOption()
      ])
    });

    this.categoryList = ['VA', 'QA', 'LR', 'DI'];
    this.difficultyList = ['Easy', 'Medium', 'Hard'];
    this.optionTypeList = ['Single', 'Multiple'];
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
      option_body: ['Some text here', Validators.required],
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

    this._question.created_by_id = this.user.uid;
    this._question.created_by_name = this.user.displayName;

    this._question.created_at = Date.now();

    this.questionService.addNewQuestion(this._question);

    alert('SUCCESS!! :-)');
    this.registerForm.reset();
  }

  toggleOptionsRequired = () => {
    this.options_required = !this.options_required;
  }

  toggleOptionType = () => {
    if(this.option_type == "Multiple"){
      this.option_type = "Single";
    } else {
      this.option_type = "Multiple";
    }

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
