import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyEditComponent } from './privacy-edit.component';

describe('PrivacyEditComponent', () => {
  let component: PrivacyEditComponent;
  let fixture: ComponentFixture<PrivacyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
