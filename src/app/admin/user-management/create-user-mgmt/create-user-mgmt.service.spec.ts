import { TestBed } from '@angular/core/testing';

import { CreateUserMgmtService } from './create-user-mgmt.service';

describe('CreateUserMgmtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateUserMgmtService = TestBed.get(CreateUserMgmtService);
    expect(service).toBeTruthy();
  });
});
