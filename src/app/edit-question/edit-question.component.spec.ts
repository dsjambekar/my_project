import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionComponent } from './edit-question.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../shared/auth.service';
import { userInfo } from 'os';

describe('EditQuestionComponent', () => {
  let component: EditQuestionComponent;
  let fixture: ComponentFixture<EditQuestionComponent>;

  let authService: AuthService;
  class MockAuthService {
    getUser() {
      return userInfo;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        QuillModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      declarations: [EditQuestionComponent],
      providers: [
        { provide: AuthService, useValue: MockAuthService }
      ],
    })
      .compileComponents();

    authService = TestBed.get(AuthService);

    beforeEach(() => {
      fixture = TestBed.createComponent(EditQuestionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });



    it('should create', () => {
      expect(component).toBeTruthy();
    });
  }));
});
