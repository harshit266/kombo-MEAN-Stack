import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesEditComponent } from './cookies-edit.component';

describe('CookiesEditComponent', () => {
  let component: CookiesEditComponent;
  let fixture: ComponentFixture<CookiesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
