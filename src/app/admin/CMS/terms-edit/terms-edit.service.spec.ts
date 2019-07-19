import { TestBed } from '@angular/core/testing';

import { TermsEditService } from './terms-edit.service';

describe('TermsEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TermsEditService = TestBed.get(TermsEditService);
    expect(service).toBeTruthy();
  });
});
