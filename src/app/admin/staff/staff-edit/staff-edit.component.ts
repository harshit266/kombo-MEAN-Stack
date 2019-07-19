import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {StaffViewService} from '../staff-view/staff-view.service';
import {Staff} from '../../../../server/src/api/v1/staff/staff.model';
import { FormGroup,FormsModule,  FormBuilder,  Validators } from '@angular/forms';
import {StaffEditService} from './staff-edit.service';
@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  angForm: FormGroup;
  user
  constructor(private route: ActivatedRoute,private StaffEditService:StaffEditService , private StaffViewService:StaffViewService) { }

  id;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.StaffViewService
    .getStaff(this.id)
    .subscribe((data: Staff[]) => {
      console.log(data , this.id)
      this.user = Array.of(data);
      console.log(this.user)
  });
  }
  
  updateStaff(form){
    console.log("-----------",form.value)
    this.StaffEditService.updateStaff(form.value , this.id);
  }

}
