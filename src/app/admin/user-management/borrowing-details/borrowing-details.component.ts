import { Component, OnInit } from '@angular/core';
import {BorrowingService} from './borrowing.service';
import {User} from '../../../../server/src/api/v1/user/user.model.js'
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-borrowing-details',
  templateUrl: './borrowing-details.component.html',
  styleUrls: ['./borrowing-details.component.css']
})
export class BorrowingDetailsComponent implements OnInit {
  user: User[];
  constructor(private BorrowingService : BorrowingService ,private route: ActivatedRoute) { }
  id;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.BorrowingService
    .getProducts(this.id)
    .subscribe((data: User[]) => {
      // console.log(data)
      this.user = Array.of(data);
  });
  }

}
