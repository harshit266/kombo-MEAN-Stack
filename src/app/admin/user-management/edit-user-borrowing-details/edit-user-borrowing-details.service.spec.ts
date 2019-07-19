import { TestBed } from '@angular/core/testing';

import { EditUserBorrowingDetailsService } from './edit-user-borrowing-details.service';

describe('EditUserBorrowingDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditUserBorrowingDetailsService = TestBed.get(EditUserBorrowingDetailsService);
    expect(service).toBeTruthy();
  });
});
