import { Component, OnInit } from '@angular/core';
import {EditUserBorrowingDetailsService} from './edit-user-borrowing-details.service'
import {User} from '../../../../server/src/api/v1/user/user.model.js'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-user-borrowing-details',
  templateUrl: './edit-user-borrowing-details.component.html',
  styleUrls: ['./edit-user-borrowing-details.component.css']
})
export class EditUserBorrowingDetailsComponent implements OnInit {
  user : User[]
  constructor(private EditUserBorrowingDetailsService:EditUserBorrowingDetailsService , private route: ActivatedRoute) { }
  id;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.EditUserBorrowingDetailsService
    .getProducts(this.id)
    .subscribe((data: User[]) => {
      // console.log(data)
      this.user = Array.of(data);
  });
  }

}
