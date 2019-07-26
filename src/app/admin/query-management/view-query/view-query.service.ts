import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewQueryService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  getUsers() {
    return this
           .http
           .get(`${this.uri}/queryViewUser`);
  }
  added(id,email,username){
    const obj = {
      id: id,
      email: email,
      username:username
    };
    this.http.post(`${this.uri}/added`,obj)
    .subscribe(res => console.log('Done'));
  }
  rejected(id,email){
    const obj = {
      id: id,
      email: email
    };
    this.http.post(`${this.uri}/rejected`, obj)
    .subscribe(res => console.log('Done'));
  }
  // active(id,is_active){
  //   var obj={
  //      is_active:is_active,
  //    }
  //   return this.http.post(`${this.uri}/editActiveUser/`+id,obj);
  //  }
}
