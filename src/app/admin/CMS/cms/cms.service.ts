import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor(private http :HttpClient) { }

  uri='http://localhost:4000';

  activeAbout(is_active){
    var obj={
       is_active:is_active,
     }
    return this.http.post(`${this.uri}/editActiveAbout/`,obj);
   }
   activePrivacy(is_active){
    var obj={
       is_active:is_active,
     }
    return this.http.post(`${this.uri}/editActivePrivacy/`,obj);
   }
   activeTerms(is_active){
    var obj={
       is_active:is_active,
     }
    return this.http.post(`${this.uri}/editActiveTerms/`,obj);
   }
   activeCookies(is_active){
    var obj={
       is_active:is_active,
     }
    return this.http.post(`${this.uri}/editActiveCookies/`,obj);
   }
}
