import { Component, OnInit } from '@angular/core';
import { FormGroup,FormsModule,  FormBuilder,  Validators } from '@angular/forms';
import {StaffCreateService} from './staff-create.service';
@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.css']
})
export class StaffCreateComponent implements OnInit {
  angForm: FormGroup;
  constructor(private StaffCreateService:StaffCreateService) { }

  ngOnInit() {

  }
  addStaff(form) {
    console.log("-------",form.controls.email._parent.status)
    console.log("from controller :",form)
   this.StaffCreateService.addStaff(form.value);
  }
  validateEmail(form) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(form.value.email).toLowerCase());
  }

}
