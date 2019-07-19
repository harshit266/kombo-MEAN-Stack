import { TestBed } from '@angular/core/testing';

import { StaffEditService } from './staff-edit.service';

describe('StaffEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffEditService = TestBed.get(StaffEditService);
    expect(service).toBeTruthy();
  });
});
