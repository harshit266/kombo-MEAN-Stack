import { TestBed } from '@angular/core/testing';

import { PersonalDetailsService } from './personal-details.service';

describe('PersonalDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalDetailsService = TestBed.get(PersonalDetailsService);
    expect(service).toBeTruthy();
  });
});
