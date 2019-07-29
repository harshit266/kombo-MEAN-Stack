import { TestBed } from '@angular/core/testing';

import { BorrowingPerUserService } from './borrowing-per-user.service';

describe('BorrowingPerUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BorrowingPerUserService = TestBed.get(BorrowingPerUserService);
    expect(service).toBeTruthy();
  });
});
