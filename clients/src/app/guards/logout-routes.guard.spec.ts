import { TestBed } from '@angular/core/testing';

import { LogoutRoutesGuard } from './logout-routes.guard';

describe('LogoutRoutesGuard', () => {
  let guard: LogoutRoutesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogoutRoutesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
