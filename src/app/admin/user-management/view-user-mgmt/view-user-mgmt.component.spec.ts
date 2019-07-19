import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserMgmtComponent } from './view-user-mgmt.component';

describe('ViewUserMgmtComponent', () => {
  let component: ViewUserMgmtComponent;
  let fixture: ComponentFixture<ViewUserMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
