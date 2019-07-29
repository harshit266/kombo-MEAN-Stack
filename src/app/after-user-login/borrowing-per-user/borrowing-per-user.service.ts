import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BorrowingPerUserService {

  constructor(private http: HttpClient) { }
  uri='http://localhost:4000';
  getBorrowingPerUserDetails() {
    return this
           .http
           .get(`${this.uri}/viewBorrowingPerUserDetails`);
  }
 
}
