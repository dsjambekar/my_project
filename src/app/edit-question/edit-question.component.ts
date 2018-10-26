import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Question } from '../shared/module/question';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { QuestionsService } from '../shared/questions.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  @Output() viewToggled = new EventEmitter<boolean>();
  @Input() question: any;
  showMoreText = 'Show more..';

  registerForm: FormGroup;
  submitted = false;
  user: any;
  numberOfOptions = 0;
  public option_type: string;


  public categoryList: string[];
  public difficultyList: string[];
  public optionTypeList: string[];

  constructor(private questionService: QuestionsService, private formBuilder: FormBuilder, public authService: AuthService) {

    this.authService.getUser().subscribe(
      user => {
        this.user = user;
      }
    );
  }

  ngOnInit() {
    this.categoryList = ['VA', 'QA', 'LR', 'DI'];
    this.difficultyList = ['Easy', 'Medium', 'Hard'];
    this.optionTypeList = ['Single', 'Multiple'];

    if (this.question.options) {
      this.numberOfOptions = this.question.options.length;
    } else {
      this.numberOfOptions = 4;
    }

    this.registerForm = this.formBuilder.group({
      key: ['', Validators.required],
      question_body: ['', Validators.required],
      category: '',
      difficulty: '',
      is_public: false,
      options_required: this.question.options_required,
      created_at: '',
      created_by_id: '',
      created_by_name: '',
      option_type: '',
      explanation_body: ['', Validators.required],
      options: this.formBuilder.array([
        this.initOption(),
        this.initOption(),
        this.initOption(),
        this.initOption()
      ])

    });

    if (this.numberOfOptions > 0) {
      this.onNumberOfOptionsChanged();
    }

    this.registerForm.setValue(this.question);
    this.option_type = this.question.option_type;
  }


  get f() { return this.registerForm.controls; }

  get options() {
    return this.registerForm.get('options') as FormArray;
  }

  initOption() {
    // initialize our address
    return this.formBuilder.group({
      option_body: ['Some text here', Validators.required],
      is_correct: [true]
    });
  }

  addOptions() {
    // add address to the list
    const control = <FormArray>this.registerForm.controls['options'];
    control.push(this.initOption());
  }

  toggleText() {
    if (this.showMoreText === 'Show more..') {
      this.showMoreText = 'Show less';
    } else {
      this.showMoreText = 'Show more..';
    }
  }

  toggleOptionType = () => {
    if (this.option_type === 'Multiple') {
      this.option_type = 'Single';
    } else {
      this.option_type = 'Multiple';
    }

  }

  toggleView() {
    this.viewToggled.emit(false);
  }

  onSubmit() {
    this.submitted = true;

    let isAnswerSelected = false;
    for (let i = 0; i < this.numberOfOptions; i++) {
      if (this.options.controls[i].value.is_correct) {
        isAnswerSelected = true;
      }
    }

    if (this.question.options_required && !isAnswerSelected) {
      alert('Please select at least one option as answer.');
      return;
    }

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert('Please enter all the values.');
      return;
    }

    this.question = this.registerForm.value;

    this.questionService.updateQuestion(this.question.key, this.question);

    alert('SUCCESS!! :-)');
  }

  toggleOptionsRequired = () => {
    this.question.options_required = !this.question.options_required;
  }

  onNumberOfOptionsChanged() {
    // this.options = [];

    for (let i = 0; i < 5; i++) {
      this.options.removeAt(0);
    }

    for (let i = 0; i < this.numberOfOptions; i++) {
      this.addOptions();
    }
  }

}
