import { Component, OnInit } from '@angular/core';
import { CreateUserMgmtService } from './create-user-mgmt.service';
import { FormGroup,FormsModule,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-mgmt',
  templateUrl: './create-user-mgmt.component.html',
  styleUrls: ['./create-user-mgmt.component.css']
})
export class CreateUserMgmtComponent implements OnInit {
  angForm: FormGroup;
  constructor(private createService:CreateUserMgmtService) {}

  ngOnInit() {
  }
  // onClick(){
  //   this.addUser("form")

  // }

  addUser(form) {
    console.log("-------",form.controls.email._parent.status)
    console.log("from controller :",form)
   this.createService.addUser(form.value);
  }
  validateEmail(form) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(form.value.email).toLowerCase());
  }

}
