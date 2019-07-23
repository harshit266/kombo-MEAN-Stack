import { Component, OnInit } from '@angular/core';
import {CmsService } from './cms.service';
import {AboutViewService} from '../about-view/about-view.service';
import {CookiesViewService} from '../cookies-view/cookies-view.service';
import {PrivacyViewService} from '../privacy-view/privacy-view.service';
import {TermsViewService} from '../terms-view/terms-view.service';
import {About} from '../../../../server/src/api/v1/about_us/about.model';
import {Cookies} from '../../../../server/src/api/v1/cookies/cookies.model'
import {Privacy} from '../../../../server/src/api/v1/privacy/privacy.model'
import {Terms} from '../../../../server/src/api/v1/ terms/terms.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})
export class CmsComponent implements OnInit {
terms;cookies;privacy;about;
  constructor(private CmsService :CmsService ,
     private AboutViewService :AboutViewService,
     private CookiesViewService:CookiesViewService , 
     private PrivacyViewService:PrivacyViewService , 
     private TermsViewService:TermsViewService)  { }

  ngOnInit() {
    this.AboutViewService
    .getAbout()
    .subscribe((data: About[]) => {
      console.log("data")
      console.log(data)
      this.about =(data);
  })
  this.CookiesViewService
    .getCookies()
    .subscribe((data: Cookies[]) => {
      console.log("data")
      console.log(data)
      // this.length=data.length
      // console.log(this.length)
      this.cookies =(data);
  })
  this.PrivacyViewService 
    .getPrivacy()
    .subscribe((data: Privacy[]) => {
      console.log("data")
      console.log(data)
      // this.length=data.length
      // console.log(this.length)
      this.privacy =(data);
  })
  this.TermsViewService
  .getTerms()
  .subscribe((data: Terms[]) => {
    console.log("data")
    console.log(data)
    // this.length=data.length
    // console.log(this.length)
    this.terms =(data);
})

  }
  activeAbout(is_active){
    is_active = !is_active;
    if($("#about").text() == "active"){
      is_active  = true;
    }else{
      is_active  = false;
    }
    this.CmsService .activeAbout(is_active).subscribe(function(res){
        if(res['code'] == 200 &&  res['last_updated']){
          console.log(is_active)
          $("#about").text("Inactive");
        }else{
          $("#about").text("active");
        }
    });
  }
  activePrivacy(is_active){
    is_active = !is_active;
    if($("#privacy").text() == "active"){
      is_active  = true;
    }else{
      is_active  = false;
    }
    this.CmsService .activePrivacy(is_active).subscribe(function(res){
        if(res['code'] == 200 &&  res['last_updated']){
          console.log(is_active)
          $("#privacy").text("Inactive");
        }else{
          $("#privacy").text("active");
        }
    });
  }
  activeTerms(is_active){
    is_active = !is_active;
    if($("#terms").text() == "active"){
      is_active  = true;
    }else{
      is_active  = false;
    }
    this.CmsService .activeTerms(is_active).subscribe(function(res){
        if(res['code'] == 200 &&  res['last_updated']){
          console.log(is_active)
          $("#terms").text("Inactive");
        }else{
          $("#terms").text("active");
        }
    });
  }
  activeCookies(is_active){
    is_active = !is_active;
    if($("#cookies").text() == "active"){
      is_active  = true;
    }else{
      is_active  = false;
    }
    this.CmsService .activeCookies(is_active).subscribe(function(res){
        if(res['code'] == 200 &&  res['last_updated']){
          console.log(is_active)
          $("#cookies").text("Inactive");
        }else{
          $("#cookies").text("active");
        }
    });
  }


}
