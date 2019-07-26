import { TestBed } from '@angular/core/testing';

import { Query2Service } from './query2.service';

describe('Query2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Query2Service = TestBed.get(Query2Service);
    expect(service).toBeTruthy();
  });
});
