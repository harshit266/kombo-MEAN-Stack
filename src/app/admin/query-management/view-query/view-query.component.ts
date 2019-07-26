import { Component, OnInit } from '@angular/core';
import {ViewQueryService} from './view-query.service';
import {query} from '../../../../server/src/api/v1/query_management/query.model';
import * as $ from 'jquery';
import 'datatables.net'
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-query',
  templateUrl: './view-query.component.html',
  styleUrls: ['./view-query.component.css']
})
export class ViewQueryComponent implements OnInit {
user;
tableWidget;
  constructor(private ViewQueryService:ViewQueryService ,
    private router :Router
    ) { }

  ngOnInit() {
    this.ViewQueryService
    .getUsers()
    .subscribe((data: query[]) => {
      // console.log(data)
      this.user = data;
      // this.initDatatable()
  })
  setTimeout(() => {
    this.initDatatable()
  }, 1000);
  }

  private initDatatable(): void {
    let exampleId: any = $('#datatable');
    this.tableWidget = exampleId.DataTable({
      select: true,
    });
  }

  added(id , email , username){
    this.ViewQueryService.added(id,email,username);
  }
  rejected(id , email){
    this.ViewQueryService.rejected(id,email);
  }
  addData(id,amount , category){
    let obj ={
      id:id,
      amount:amount,
      category:category
    }
    this.router.navigate(['admin/month-date',obj]);
  }
}
