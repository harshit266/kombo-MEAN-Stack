import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryEditService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
 
  updateCategory(form , id) {
    // alert("Succesfully Updated ")
   const obj = {
     category: form.category,
     intrest_rate: form.intrest_rate ,
   };
   console.log(obj);
   this.http.post(`${this.uri}/editCategory/`+id, obj)
       .subscribe(res => console.log('Done'));
 }
}
