import { TestBed } from '@angular/core/testing';

import { MonthDateService } from './month-date.service';

describe('MonthDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonthDateService = TestBed.get(MonthDateService);
    expect(service).toBeTruthy();
  });
});
