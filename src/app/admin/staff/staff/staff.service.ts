import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  getStaff() {
    return this
           .http
           .get(`${this.uri}/viewStaff`);
  }

  active(id,is_active){
    var obj={
       is_active:is_active,
     }
    return this.http.post(`${this.uri}/editActive/`+id,obj);
   }


}
