import { TestBed } from '@angular/core/testing';

import { BodyyGuard } from './bodyy.guard';

describe('BodyyGuard', () => {
  let guard: BodyyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BodyyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
