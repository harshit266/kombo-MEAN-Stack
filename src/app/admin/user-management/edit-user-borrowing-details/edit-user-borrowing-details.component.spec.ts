import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserBorrowingDetailsComponent } from './edit-user-borrowing-details.component';

describe('EditUserBorrowingDetailsComponent', () => {
  let component: EditUserBorrowingDetailsComponent;
  let fixture: ComponentFixture<EditUserBorrowingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserBorrowingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserBorrowingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
