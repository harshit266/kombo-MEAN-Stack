import { Component, OnInit } from '@angular/core';
import {BorrowingService} from './borrowing.service';
import {Borrowing} from '../../../../server/src/api/v1/user/borrowing.model.js'
import { ActivatedRoute } from "@angular/router";
import * as $ from 'jquery'
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-borrowing-details',
  templateUrl: './borrowing-details.component.html',
  styleUrls: ['./borrowing-details.component.css']
})
export class BorrowingDetailsComponent implements OnInit {
  user: Borrowing[];
  constructor(private BorrowingService : BorrowingService ,private route: ActivatedRoute ,
    private router :Router
    ) { }
  id;
  tableWidget;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.BorrowingService
    .getProducts(this.id)
    .subscribe((data: Borrowing[]) => {
      console.log(data)
      this.user = Array.of(data);
  });
  setTimeout(() => {
    this.initDatatable()
  }, 1000);
  }
  private initDatatable(): void {
    let exampleId: any = $('#datatable');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
  }
paymentView(id){
  this.router.navigate(['admin/payment-view',id]);
}
}
