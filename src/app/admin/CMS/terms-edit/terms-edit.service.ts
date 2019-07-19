import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TermsEditService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  terms(terms) {
  
   const obj = {
     terms: terms
   };
  //  console.log("aaaaaaaaaaaaaaa",obj);
   this.http.post(`${this.uri}/terms-edit`, obj)
       .subscribe(res => console.log('Done'));
 }
}
