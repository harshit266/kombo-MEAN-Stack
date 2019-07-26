import { Component, OnInit } from '@angular/core';
import {MonthDateService} from './month-date.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-month-date',
  templateUrl: './month-date.component.html',
  styleUrls: ['./month-date.component.css']
})
export class MonthDateComponent implements OnInit {
amount;category;
id
  constructor(private MonthDateService :MonthDateService ,private route : ActivatedRoute) { }

  ngOnInit() {
    this.amount = this.route.snapshot.paramMap.get("amount");
    this.id = this.route.snapshot.paramMap.get("id");    
    this.category = this.route.snapshot.paramMap.get("category");
  }
  addData(form) {
    this.MonthDateService.addData(form.value ,this.id, this.amount , this.category);
  }
}
