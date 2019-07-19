import { Component, OnInit } from '@angular/core';
import { ImageResize } from 'quill-image-resize-module';
import * as Quill from 'quill'; 
import {AboutUsEditService} from './about-us-edit.service'
import { ActivatedRoute } from "@angular/router";
import {AboutViewService} from '../about-view/about-view.service'
import {About} from '../../../../server/src/api/v1/about_us/about.model.js';
import $ from "jquery";
@Component({
  selector: 'app-about-us-edit',
  templateUrl: './about-us-edit.component.html',
  styleUrls: ['./about-us-edit.component.css']
})

export class AboutUsEditComponent implements OnInit {
 quill ;
 a: About;
  constructor(private AboutUsEditService:AboutUsEditService ,private AboutViewService:AboutViewService, private route: ActivatedRoute) {}
 id;
 des;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
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

    this.AboutViewService
    .getAbout()
    .subscribe((d: About) => {
      // console.log("data")
      // console.log(d)
      this.a =d[0].description;
      // console.log("a=" , this.a)
      // console.log("d=" , d)

      // console.log("------------",this.a.description)
    // $('#editor-container').html(this.a.description);
  })
  
  }
  submit(form)
  {
    var about = document.querySelector('input[name=about]');
    // about = this.quill.root.innerHTML;
    // console.log(about)
    about = $(".ql-editor").html();
    console.log(about)
    this.AboutUsEditService.about(about, this.id);
   
  }

}
