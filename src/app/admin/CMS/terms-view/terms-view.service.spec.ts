import { TestBed } from '@angular/core/testing';

import { TermsViewService } from './terms-view.service';

describe('TermsViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TermsViewService = TestBed.get(TermsViewService);
    expect(service).toBeTruthy();
  });
});
