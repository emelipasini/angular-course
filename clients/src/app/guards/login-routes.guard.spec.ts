import { TestBed } from '@angular/core/testing';

import { LoginRoutesGuard } from './login-routes.guard';

describe('LoginRoutesGuard', () => {
  let guard: LoginRoutesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginRoutesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
