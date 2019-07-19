import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AboutViewService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  getAbout() {
    return this
           .http
           .get(`${this.uri}/about`);
  }
}
