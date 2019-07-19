import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingDetailsComponent } from './borrowing-details.component';

describe('BorrowingDetailsComponent', () => {
  let component: BorrowingDetailsComponent;
  let fixture: ComponentFixture<BorrowingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
