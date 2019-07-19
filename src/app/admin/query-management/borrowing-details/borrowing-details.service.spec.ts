import { TestBed } from '@angular/core/testing';

import { BorrowingDetailsService } from './borrowing-details.service';

describe('BorrowingDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BorrowingDetailsService = TestBed.get(BorrowingDetailsService);
    expect(service).toBeTruthy();
  });
});
