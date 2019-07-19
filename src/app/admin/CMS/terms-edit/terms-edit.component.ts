import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill'; 
import {Terms} from'../../../../server/src/api/v1/ terms/terms.model';
import {TermsEditService} from './terms-edit.service';
import {TermsViewService} from '../terms-view/terms-view.service';
import $ from "jquery";


@Component({
  selector: 'app-terms-edit',
  templateUrl: './terms-edit.component.html',
  styleUrls: ['./terms-edit.component.css']
})
export class TermsEditComponent implements OnInit {
a;
  constructor(private TermsEditService:TermsEditService, private TermsViewService:TermsViewService) { }
  
  
  ngOnInit() {
    
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
 
     this.TermsViewService
     .getTerms()
     .subscribe((d: Terms[]) => {
       // console.log("data")
       this.a =d[0].description;
      //  console.log(this.a)
       // console.log("------------",this.a[0].description)
    //  $('#editor-container').html(this.a[0].description);
   })
   
   }
   submit(form)
   {
     var about = document.querySelector('input[name=about]');
    //  about = this.quill.root.innerHTML;
     // console.log(about)
     about = $(".ql-editor").html();
     this.TermsEditService.terms(about);
    
   }
 
   }


