import { TestBed } from '@angular/core/testing';

import { CookiesEditService } from './cookies-edit.service';

describe('CookiesEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookiesEditService = TestBed.get(CookiesEditService);
    expect(service).toBeTruthy();
  });
});
