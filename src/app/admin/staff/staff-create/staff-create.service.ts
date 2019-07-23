import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffCreateService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  addStaff(form) {
    // alert("entered")
   const obj = {
     name: form.name,
     email: form.email,
     number:form.number
   };
   console.log(obj);
   this.http.post(`${this.uri}/addStaff`, obj)
   .subscribe(res => console.log('Done'));
    
}
}
