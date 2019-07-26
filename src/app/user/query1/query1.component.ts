import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-query1',
  templateUrl: './query1.component.html',
  styleUrls: ['./query1.component.css']
})
export class Query1Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  amount(form) {
    console.log("from controller :",form)
    this.router.navigate(['user/query1/',form.value]); 
   
  }
}
