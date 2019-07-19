import { TestBed } from '@angular/core/testing';

import { PrivacyEditService } from './privacy-edit.service';

describe('PrivacyEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivacyEditService = TestBed.get(PrivacyEditService);
    expect(service).toBeTruthy();
  });
});
