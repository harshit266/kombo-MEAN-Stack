import { Component, OnInit } from '@angular/core';
import {StaffService} from './staff.service';
import {Staff} from'../../../../server/src/api/v1/staff/staff.model';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
user;
public tableWidget: any;
  constructor(private StaffService:StaffService) { }

  ngOnInit() {
  
    this.StaffService
    .getStaff()
    .subscribe((data: Staff[]) => {
      // console.log(data)
      this.user = data;
      // this.initDatatable()
  })
  setTimeout(() => {
    this.initDatatable()
  }, 1000);
 
  }
  active(id , is_active){
    is_active = !is_active;
    if($("#course_status_btn_"+ id).text() == "active"){
      is_active  = true;
    }else{
      is_active  = false;
    }
    this.StaffService.active(id,is_active).subscribe(function(res){
        if(res['code'] == 200 &&  res['last_updated']){
          console.log(is_active)
          $("#course_status_btn_" + id).text("Inactive");
        }else{
          $("#course_status_btn_" + id).text("active");
        }
    });;
  }
  private initDatatable(): void {
    let exampleId: any = $('#datatable');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
  }

}
