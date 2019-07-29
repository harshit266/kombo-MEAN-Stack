import { Component, OnInit } from '@angular/core';
import {PrivacyEditService} from './privacy-edit.service'
import { ActivatedRoute } from "@angular/router";
import * as Quill from 'quill'; 
import {Privacy} from '../../../../server/src/api/v1/privacy/privacy.model.js';
import * as $ from "jquery";
import {PrivacyViewService} from '../privacy-view/privacy-view.service';
@Component({
  selector: 'app-privacy-edit',
  templateUrl: './privacy-edit.component.html',
  styleUrls: ['./privacy-edit.component.css']
})
export class PrivacyEditComponent implements OnInit {
  a: Privacy[];
  constructor(private PrivacyViewService:PrivacyViewService , private PrivacyEditService:PrivacyEditService ,  private route: ActivatedRoute) { }
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
 
     this.PrivacyViewService
     .getPrivacy()
     .subscribe((d: Privacy[]) => {
       // console.log("data")
       this.a =d[0].description;
      //  console.log(this.a)
       // console.log("------------",this.a[0].description)
    //  $('#editor-container').html(this.a[0].description);
   })
   
   }
   submit(form)
   {
    //  var about = document.querySelector('input[name=about]');
    //  about = this.quill.root.innerHTML;
     // console.log(about)
     var about = $(".ql-editor").html();
     this.PrivacyEditService.privacy(about);
    
   }
 
   }


