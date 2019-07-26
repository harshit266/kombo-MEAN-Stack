import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {ChangePasswordService} from './change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private route : ActivatedRoute ,
     private title :Title ,
     private ChangePasswordService:ChangePasswordService) { }
d;
  ngOnInit() {
    this.title.setTitle('Change Password');
    this.d = this.route.snapshot.paramMap.get("id");
   
  }

changePassword(form){
  // console.log(form.value)
  this.ChangePasswordService.changePassword(form.value ,this.d);
}
}
