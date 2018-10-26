import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsListComponent } from './questions-list.component';
import { Question } from '../shared/module/question';
import { QuestionComponent } from '../question/question.component';
import { ViewQuestionComponent } from '../view-question/view-question.component';
import { EditQuestionComponent } from '../edit-question/edit-question.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../shared/auth.service';
import { AbstractMockObservableService } from '../shared/module/AbstractMockObservableService';


describe('QuestionsListComponent', () => {
  let component: QuestionsListComponent;
  let fixture: ComponentFixture<QuestionsListComponent>;
  let mockService;
  const questions = {};

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  class MockService extends AbstractMockObservableService {
    doStuff() {
      return this;
    }
  }

  beforeEach(async(() => {
    mockService = new MockService();

    TestBed.configureTestingModule({
      imports: [RouterModule,
        ReactiveFormsModule,
         FormsModule,
          QuillModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase)
        ],
      declarations: [QuestionsListComponent,
        QuestionComponent,
        ViewQuestionComponent,
        EditQuestionComponent

        ],
        providers: [
          { provide: AngularFirestore, useValue: FirestoreStub },
          {provide: AuthService, useValue: mockService }
        ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsListComponent);
    component = fixture.componentInstance;
    component.questions = questions;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
