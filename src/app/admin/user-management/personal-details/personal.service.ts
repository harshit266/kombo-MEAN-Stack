import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }
  uri='http://localhost:4000';
  getProducts(id) {
    return this
           .http
           .get(`${this.uri}/viewPerUser/`+id);
  }
}
