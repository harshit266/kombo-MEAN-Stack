import { TestBed } from '@angular/core/testing';

import { PrivacyViewService } from './privacy-view.service';

describe('PrivacyViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivacyViewService = TestBed.get(PrivacyViewService);
    expect(service).toBeTruthy();
  });
});
