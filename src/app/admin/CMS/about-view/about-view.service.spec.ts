import { TestBed } from '@angular/core/testing';

import { AboutViewService } from './about-view.service';

describe('AboutViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutViewService = TestBed.get(AboutViewService);
    expect(service).toBeTruthy();
  });
});
