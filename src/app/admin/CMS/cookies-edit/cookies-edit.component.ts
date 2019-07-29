import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill'; 
import {Cookies} from '../../../../server/src/api/v1/cookies/cookies.model';
import * as $ from "jquery";
import {CookiesEditService} from './cookies-edit.service';
import {CookiesViewService} from '../cookies-view/cookies-view.service';
@Component({
  selector: 'app-cookies-edit',
  templateUrl: './cookies-edit.component.html',
  styleUrls: ['./cookies-edit.component.css']
})
export class CookiesEditComponent implements OnInit {
a;
  constructor(private CookiesEditService:CookiesEditService , private CookiesViewService:CookiesViewService) { }
  quill;

  des;

   ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get("id");
     setTimeout(function(){
     
     this.quill = new Quill('#editor-container', {
       modules: {
         // ImageResize: {
         //   displaySize: true
         // },
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'color': [] }, { 'background': [] }], 
          [{ 'align': [] }],
          ['link', 'image'], 
        ]
     },
      
       placeholder: 'Compose an epic...',
       theme: 'snow'  // or 'bubble'
     });
    },300)
 
     this.CookiesViewService
     .getCookies()
     .subscribe((d: Cookies[]) => {
       // console.log("data")
       this.a =d[0].description;
    })
   
   }
   submit(form)
   {
    //  var about = document.querySelector('input[name=about]');
    //  about = this.quill.root.innerHTML;
     // console.log(about)
    var  about = $(".ql-editor").html();
     this.CookiesEditService.cookies(about);
    
   }

}
