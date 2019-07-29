import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingPerUserComponent } from './borrowing-per-user.component';

describe('BorrowingPerUserComponent', () => {
  let component: BorrowingPerUserComponent;
  let fixture: ComponentFixture<BorrowingPerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowingPerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingPerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
