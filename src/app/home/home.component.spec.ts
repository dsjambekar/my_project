import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const questions = [{
    key: 'dfdfdfdsddfg',
    question_body: 'string',
    category: 'string',
    difficulty: 'string',
    is_public: true,
    option_type: 'string',
    options: [{
      $key: 'string',
      option_body: 'string',
      is_correct: true,
    }],
    explanation_body: 'string',
    created_by_id: 'string',
    created_by_name: 'string',
    created_at: 14567
  },
  {
    key: 'dfdfdfdsddfg',
    question_body: 'string',
    category: 'string',
    difficulty: 'string',
    is_public: true,
    option_type: 'string',
    options: [{
      $key: 'string',
      option_body: 'string',
      is_correct: true,
    }],
    explanation_body: 'string',
    created_by_id: 'string',
    created_by_name: 'string',
    created_at: 14568
  },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
      component.todos$ = questions;

    fixture.detectChanges();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.todos$ = questions;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
