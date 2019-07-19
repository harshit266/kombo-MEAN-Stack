import { TestBed } from '@angular/core/testing';

import { ViewUserMgmtService } from './view-user-mgmt.service';

describe('ViewUserMgmtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewUserMgmtService = TestBed.get(ViewUserMgmtService);
    expect(service).toBeTruthy();
  });
});
