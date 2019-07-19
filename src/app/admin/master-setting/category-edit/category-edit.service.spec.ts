import { TestBed } from '@angular/core/testing';

import { CategoryEditService } from './category-edit.service';

describe('CategoryEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryEditService = TestBed.get(CategoryEditService);
    expect(service).toBeTruthy();
  });
});
