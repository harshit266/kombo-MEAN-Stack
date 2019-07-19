import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TermsViewService {

  constructor(private http : HttpClient) { }
  uri='http://localhost:4000';
  getTerms() {
    return this
           .http
           .get(`${this.uri}/terms`);
  }
}
