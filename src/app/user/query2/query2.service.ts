import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Query2Service {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  add(form , file , amount ,d) {
    // alert("entered")
   const obj = {
     username: form.billing_first_name,
     email: form.billing_email,
     category:d,
     number:form.billing_phone,
     bank_statement:file,
     amount:amount
   };
   console.log(obj);
   this.http.post(`${this.uri}/queryAddUser`, obj)
   .subscribe(res => console.log('Done'));
    
}
}
