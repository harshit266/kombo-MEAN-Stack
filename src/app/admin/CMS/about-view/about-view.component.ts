import { Component, OnInit } from '@angular/core';
import{ AboutViewService} from './about-view.service'
import {About} from '../../../../server/src/api/v1/about_us/about.model.js';
import $ from "jquery";

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css']
})
export class AboutViewComponent implements OnInit {
  about: About[];
  constructor(private AboutViewService : AboutViewService ) { }
id;
  ngOnInit() {
    
    this.AboutViewService
    .getAbout()
    .subscribe((data: About[]) => {
      console.log("data")
      console.log(data)
      this.about =(data);
      // console.log(this.about[0][0].description);
      // $('#test').html(this.about[0][0].description);
      // console.log(this.about)

      // this.initDatatable()
  })
  }

}
