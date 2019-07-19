import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CookiesEditService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  cookies(cookies ) {
  
   const obj = {
     cookies: cookies
   };
  //  console.log(`${this.uri}/cookie-edit`);
   this.http.post(`${this.uri}/cookies-edit`, obj)
   .subscribe(res => console.log('Done'));
}
}

