import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
e;
  uri='http://localhost:4000';
  
  constructor(private http: HttpClient) { }
 
 	checkLoginCredentials(formdata) {
   const obj = {
     email: formdata.username,
     password: formdata.password,
   };
   console.log(obj);
   return this.http.post(`${this.uri}/userLogin`, obj);

  }
 forgotPassword(formdata){
  const obj = {
    email : formdata.username
  }
  this.e=formdata.username;
  this.http.post(`${this.uri}/forgotPassword`, obj)
  .subscribe(res => console.log('Done'));

 }

 checkOtp(form) {
  const obj = {
    email: this.e,
    otp: form.otp,
  };
  console.log(obj);
  return this.http.post(`${this.uri}/checkOtp`, obj);

 }
}
