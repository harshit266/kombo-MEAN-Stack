import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PrivacyViewService {

  constructor(private http : HttpClient) { }
  uri='http://localhost:4000';
  getPrivacy() {
    return this
           .http
           .get(`${this.uri}/privacy`);
  }
}
