import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterUserLoginComponent } from './after-user-login.component';

describe('AfterUserLoginComponent', () => {
  let component: AfterUserLoginComponent;
  let fixture: ComponentFixture<AfterUserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterUserLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
