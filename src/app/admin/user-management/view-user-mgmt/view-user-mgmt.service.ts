import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewUserMgmtService {

  constructor(private http: HttpClient) { }
  uri='http://localhost:4000';
  getProducts() {
    return this
           .http
           .get(`${this.uri}/viewUser`);
  }
  active(id,is_active){
    var obj={
       is_active:is_active,
     }
    return this.http.post(`${this.uri}/editActiveUser/`+id,obj);
   }
  
}
