import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsViewComponent } from './terms-view.component';

describe('TermsViewComponent', () => {
  let component: TermsViewComponent;
  let fixture: ComponentFixture<TermsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
