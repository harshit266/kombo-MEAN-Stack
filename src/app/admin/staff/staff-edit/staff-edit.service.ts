import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffEditService {

  constructor(private http: HttpClient) { }
  uri='http://localhost:4000';
  updateStaff(form , id) {
    // alert("Succesfully Updated ")
   const obj = {
     name: form.name,
     email: form.email ,
     number : form.number
   };
   console.log(obj);
   this.http.post(`${this.uri}/editStaff/`+id, obj)
       .subscribe(res => console.log('Done'));
 }
}
