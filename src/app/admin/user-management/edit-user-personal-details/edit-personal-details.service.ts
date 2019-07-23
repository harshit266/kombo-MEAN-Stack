import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EditPersonalDetailsService {

  constructor(private http: HttpClient) { }
  uri='http://localhost:4000';
  updateUser(form , id) {
    // alert("Succesfully Updated ")
   const obj = {
     username: form.username,
     email: form.email
   };
   console.log(obj);
   this.http.post(`${this.uri}/updatePersonaldetails/`+id, obj)
       .subscribe(res => console.log('Done'));
 }
}
