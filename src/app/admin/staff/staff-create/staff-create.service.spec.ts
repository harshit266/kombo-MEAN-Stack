import { TestBed } from '@angular/core/testing';

import { StaffCreateService } from './staff-create.service';

describe('StaffCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffCreateService = TestBed.get(StaffCreateService);
    expect(service).toBeTruthy();
  });
});
