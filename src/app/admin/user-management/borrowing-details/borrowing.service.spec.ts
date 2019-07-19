import { TestBed } from '@angular/core/testing';

import { BorrowingService } from './borrowing.service';

describe('BorrowingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BorrowingService = TestBed.get(BorrowingService);
    expect(service).toBeTruthy();
  });
});
