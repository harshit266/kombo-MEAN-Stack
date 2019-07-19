import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryViewService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  getCategory() {
    return this
           .http
           .get(`${this.uri}/viewCategory`);
  }
  getCategorys(id) {
    return this
           .http
           .get(`${this.uri}/viewPerCategory/`+id);
  }
  active(id,is_active){
    var obj={
       is_active:is_active,
     }
    return this.http.post(`${this.uri}/editActiveCategory/`+id,obj);
   }

   addCategory(form) {
    const obj = {
      category: form.category,
      intrest_rate: form.intrest_rate,
    };
    console.log(obj);
    this.http.post(`${this.uri}/addCategory`, obj)
    .subscribe(res => console.log('Done'));
  }

}
