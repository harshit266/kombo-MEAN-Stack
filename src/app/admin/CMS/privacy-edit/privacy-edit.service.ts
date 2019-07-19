import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PrivacyEditService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  privacy(privacy ) {
  
   const obj = {
     privacy: privacy
   };
  //  console.log("aaaaaaaaaaaaaaa",obj);
   this.http.post(`${this.uri}/privacy-edit`, obj)
       .subscribe(res => console.log('Done'));
 }
}
