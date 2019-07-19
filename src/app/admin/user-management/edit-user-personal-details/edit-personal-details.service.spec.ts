import { TestBed } from '@angular/core/testing';

import { EditPersonalDetailsService } from './edit-personal-details.service';

describe('EditPersonalDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditPersonalDetailsService = TestBed.get(EditPersonalDetailsService);
    expect(service).toBeTruthy();
  });
});
