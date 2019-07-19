import { Component, OnInit,Inject } from '@angular/core';
import {CategoryViewService} from './category-view.service';
import {Category} from '../../../../server/src/api/v1/master_setting/master.model'
import * as $ from 'jquery';
import 'datatables.net'
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';
// import { MAT_DIALOG_DATA } from '@angular/material';
// import {MatDialogConfig } from '@angular/material';
import {CategoryAddComponent} from '../category-add/category-add.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {
user;
animal: string;
name: string;

public tableWidget: any;
  constructor(private CategoryViewService:CategoryViewService ,public dialog: MatDialog) { }

  ngOnInit() {
  
    this.CategoryViewService
    .getCategory()
    .subscribe((data: Category[]) => {
      // console.log(data)
      this.user = data;
      // this.initDatatable()
  })
  setTimeout(() => {
    this.initDatatable()
  }, 1000);

  $('#sign-in-button').click(function(){
    
    $('#sign-in').show();
    // $('#main').hide();


})
     $('#submit').click(function(){
  
    $('#sign-in').hide();
    

})

     $('#otp-submit').click(function(){
$('#forgot-password').fadeIn({queue: false, duration: 'slow'});
$('#sign-in-form').fadeOut( {queue: false, duration: 'slow'});
$('#sign-in-form').animate({ 'left': "-700px" }, 'slow');

})
 
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryAddComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }



  active(id , is_active){
    is_active = !is_active;
    if($("#course_status_btn_"+ id).text() == "active"){
      is_active  = true;
    }else{
      is_active  = false;
    }
    this.CategoryViewService.active(id,is_active).subscribe(function(res){
        if(res['code'] == 200 &&  res['last_updated']){
          console.log()
          $("#course_status_btn_" + id).text("Inactive");
        }else{
          $("#course_status_btn_" + id).text("active");
        }
    });;
  }

  addCategory(form) {
   this.CategoryViewService.addCategory(form.value);
  }


  private initDatatable(): void {
    let exampleId: any = $('#datatable');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
  }


}
