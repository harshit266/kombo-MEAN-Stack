import { TestBed } from '@angular/core/testing';

import { CategoryViewService } from './category-view.service';

describe('CategoryViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryViewService = TestBed.get(CategoryViewService);
    expect(service).toBeTruthy();
  });
});
