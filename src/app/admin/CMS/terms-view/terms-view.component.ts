import { Component, OnInit } from '@angular/core';
import {TermsViewService} from './terms-view.service';
import {Terms} from '../../../../server/src/api/v1/ terms/terms.model';

@Component({
  selector: 'app-terms-view',
  templateUrl: './terms-view.component.html',
  styleUrls: ['./terms-view.component.css']
})
export class TermsViewComponent implements OnInit {
terms
length
  constructor(private  TermsViewService :TermsViewService) { }

  ngOnInit() {
    this.TermsViewService
    .getTerms()
    .subscribe((data: Terms[]) => {
      console.log("data")
      console.log(data)
      this.length=data.length
      console.log(this.length)
      this.terms =(data);
  })
  }

}
