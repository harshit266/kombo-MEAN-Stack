import { Component, OnInit } from '@angular/core';
import {ViewUserMgmtService} from './view-user-mgmt.service';
import {User} from '../../../../server/src/api/v1/user/user.model.js'
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-view-user-mgmt',
  templateUrl: './view-user-mgmt.component.html',
  styleUrls: ['./view-user-mgmt.component.css']
})
export class ViewUserMgmtComponent implements OnInit {
  user: User[];
  public tableWidget: any;
  constructor(private ViewUserMgmtService:ViewUserMgmtService) { }
  
  ngOnInit() {
  
    this.ViewUserMgmtService
    .getProducts()
    .subscribe((data: User[]) => {
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
    this.ViewUserMgmtService.active(id,is_active).subscribe(function(res){
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
      select: true,
    });
  }
}

 
