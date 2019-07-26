import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthDateComponent } from './month-date.component';

describe('MonthDateComponent', () => {
  let component: MonthDateComponent;
  let fixture: ComponentFixture<MonthDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
