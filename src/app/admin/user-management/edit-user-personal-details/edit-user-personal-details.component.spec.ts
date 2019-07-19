import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserMgmtComponent } from './edit-user-personal-details.component';

describe('EditUserMgmtComponent', () => {
  let component: EditUserMgmtComponent;
  let fixture: ComponentFixture<EditUserMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
