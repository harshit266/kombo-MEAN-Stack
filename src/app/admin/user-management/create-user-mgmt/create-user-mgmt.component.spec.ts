import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserMgmtComponent } from './create-user-mgmt.component';

describe('CreateUserMgmtComponent', () => {
  let component: CreateUserMgmtComponent;
  let fixture: ComponentFixture<CreateUserMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
