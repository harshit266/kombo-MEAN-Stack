import { TestBed } from '@angular/core/testing';

import { StaffViewService } from './staff-view.service';

describe('StaffViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffViewService = TestBed.get(StaffViewService);
    expect(service).toBeTruthy();
  });
});
