import { Component, OnInit } from '@angular/core';
import {BorrowingPerUserService} from './borrowing-per-user.service';
import {Borrowing} from '../../../server/src/api/v1/user/borrowing.model';
import {Query} from '../../../server/src/api/v1/query_management/query.model';

@Component({
  selector: 'app-borrowing-per-user',
  templateUrl: './borrowing-per-user.component.html',
  styleUrls: ['./borrowing-per-user.component.css']
})
export class BorrowingPerUserComponent implements OnInit {
loan;
query;
  constructor(private BorrowingPerUserService:BorrowingPerUserService) { }

  ngOnInit() {
    this.BorrowingPerUserService
    .getBorrowingPerUserDetails()
    .subscribe((data: Borrowing[]) => {
      // console.log(data)
      this.loan = Array.of(data);
      
  })
  this.BorrowingPerUserService
  .getBorrowingPerUserDetailsQuery()
  .subscribe((data1: Query[]) => {
    // console.log(data)
    this.query = Array.of(data1);
    
})


  }

}
