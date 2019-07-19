import { Component, OnInit } from '@angular/core';
import {StaffViewService} from './staff-view.service';
import { ActivatedRoute } from "@angular/router";
import {Staff} from '../../../../server/src/api/v1/staff/staff.model';

@Component({
  selector: 'app-staff-view',
  templateUrl: './staff-view.component.html',
  styleUrls: ['./staff-view.component.css']
})
export class StaffViewComponent implements OnInit {
user
  constructor(private StaffViewService:StaffViewService , private route: ActivatedRoute) { }

  id;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    // console.log(this.id)
    this.StaffViewService
    .getStaff(this.id)
    .subscribe((data: Staff[]) => {
      console.log(data , this.id)
      this.user = Array.of(data);
      console.log(this.user)
  });
  }
}
