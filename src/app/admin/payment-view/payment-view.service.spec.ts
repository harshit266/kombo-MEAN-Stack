import { TestBed } from '@angular/core/testing';

import { PaymentViewService } from './payment-view.service';

describe('PaymentViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentViewService = TestBed.get(PaymentViewService);
    expect(service).toBeTruthy();
  });
});
