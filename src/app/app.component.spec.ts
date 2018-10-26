import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AbstractMockObservableService } from './shared/module/AbstractMockObservableService';
import { AuthService } from './shared/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('AppComponent', () => {

  let mockService;

  class MockService extends AbstractMockObservableService {
    doStuff() {
      return this;
    }
  }

  beforeEach(async(() => {
    mockService = new MockService();

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: AuthService, useValue: mockService }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('The Repository');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Logo');
  // }));
});
