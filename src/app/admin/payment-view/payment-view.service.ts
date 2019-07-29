import { Injectable } from '@angular/core';
import {BorrowingService} from '../user-management/borrowing-details/borrowing.service';
import {Borrowing} from '../../../server/src/api/v1/user/borrowing.model.js';
import { ActivatedRoute } from "@angular/router";
import * as $ from 'jquery'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentViewService {

  constructor(private http: HttpClient) { }
  
}
