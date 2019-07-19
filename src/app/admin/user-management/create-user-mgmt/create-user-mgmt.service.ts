import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CreateUserMgmtService {

  constructor(private http: HttpClient) { }
  uri='http://localhost:4000';
  addUser(form) {
    alert("entered")
   const obj = {
     username: form.username,
     email: form.email
   };
   console.log(obj);
   this.http.post(`${this.uri}/addUser`, obj)
       .subscribe(res => console.log('Done'));
 }
}
