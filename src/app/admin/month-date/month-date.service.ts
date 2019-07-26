import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonthDateService {
  
  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';

  addData(form , id, amount, category) {

   const obj = {
     month: form.month,
     date: form.date,
     amount:amount,
     category:category,
     id:id
   };
   console.log(obj);
   this.http.post(`${this.uri}/addBorrowing`, obj)
   .subscribe(res => console.log('Done'));
    
}

}
