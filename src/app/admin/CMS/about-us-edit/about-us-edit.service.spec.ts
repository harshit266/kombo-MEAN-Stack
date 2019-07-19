import { TestBed } from '@angular/core/testing';

import { AboutUsEditService } from './about-us-edit.service';

describe('AboutUsEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutUsEditService = TestBed.get(AboutUsEditService);
    expect(service).toBeTruthy();
  });
});
