import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffViewService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  getStaff(id) {
    return this
           .http
           .get(`${this.uri}/viewPerStaff/`+id);
  }
}
