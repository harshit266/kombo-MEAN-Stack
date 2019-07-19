import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CookiesViewService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  getCookies() {
    return this
           .http
           .get(`${this.uri}/cookies`);
  }
}
