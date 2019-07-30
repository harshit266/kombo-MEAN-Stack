import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersistenceService } from 'angular-persistence';

@Injectable({
  providedIn: 'root'
})
export class BorrowingPerUserService {

  constructor(private http: HttpClient , 
    private  persistenceService: PersistenceService
    ) { }
  uri='http://localhost:4000';
  getBorrowingPerUserDetails() {
    return this
           .http
           .get(`${this.uri}/viewBorrowingPerUserDetails/` + this.persistenceService.get('email'));
  }
  getBorrowingPerUserDetailsQuery (){
    return this
    .http
    .get(`${this.uri}/viewBorrowingPerUserDetailsQuery/` + this.persistenceService.get('email'));

  }
 
}
