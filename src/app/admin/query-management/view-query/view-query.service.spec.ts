import { TestBed } from '@angular/core/testing';

import { ViewQueryService } from './view-query.service';

describe('ViewQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewQueryService = TestBed.get(ViewQueryService);
    expect(service).toBeTruthy();
  });
});
