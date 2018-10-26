import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { AbstractMockObservableService } from '../shared/module/AbstractMockObservableService';
import { AuthService } from '../shared/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let mockService;

  class MockService extends AbstractMockObservableService {
    doStuff() {
      return this;
    }
  }

  beforeEach(async(() => {
    mockService = new MockService();

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ContactComponent],
        providers: [
          { provide: AuthService, useValue: mockService }
        ]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ContactComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  }));
});
