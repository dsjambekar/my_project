import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AbstractMockObservableService } from './module/AbstractMockObservableService';

describe('AuthService', () => {
  class MockService extends AbstractMockObservableService {
    doStuff() {
      return this;
    }
  }
  let mockService;
  beforeEach(() => {
    mockService = new MockService();
    TestBed.configureTestingModule({
      providers: [{provide: AuthService, useValue: mockService }],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
