import { Component, OnInit } from '@angular/core';
import {CookiesViewService} from './cookies-view.service';
import {Cookies} from '../../../../server/src/api/v1/cookies/cookies.model';
@Component({
  selector: 'app-cookies-view',
  templateUrl: './cookies-view.component.html',
  styleUrls: ['./cookies-view.component.css']
})
export class CookiesViewComponent implements OnInit {
length
cookies
  constructor(private CookiesViewService:CookiesViewService) { }


  ngOnInit() {
    this.CookiesViewService
    .getCookies()
    .subscribe((data: Cookies[]) => {
      console.log("data")
      console.log(data)
      this.length=data.length
      console.log(this.length)
      this.cookies =(data);
  })
  }

}
