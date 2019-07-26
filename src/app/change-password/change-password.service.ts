import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  changePassword(form ,d) {
    // alert("entered")
   const obj = {
     password: form.password,
     id:d
    
   };
   console.log(obj);
   this.http.post(`${this.uri}/changePassword`, obj)
   .subscribe(res => console.log('Done'));
    
}
}
