import { TestBed } from '@angular/core/testing';

import { CookiesViewService } from './cookies-view.service';

describe('CookiesViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookiesViewService = TestBed.get(CookiesViewService);
    expect(service).toBeTruthy();
  });
});
