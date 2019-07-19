import { Component, OnInit } from '@angular/core';
import {Privacy} from '../../../../server/src/api/v1/privacy/privacy.model';
import {PrivacyViewService } from './privacy-view.service'

@Component({
  selector: 'app-privacy-view',
  templateUrl: './privacy-view.component.html',
  styleUrls: ['./privacy-view.component.css']
})
export class PrivacyViewComponent implements OnInit {
  privacy: Privacy[];
  length;
  constructor(private PrivacyViewService : PrivacyViewService ) { }

  ngOnInit() {
    this.PrivacyViewService 
    .getPrivacy()
    .subscribe((data: Privacy[]) => {
      console.log("data")
      console.log(data)
      this.length=data.length
      console.log(this.length)
      this.privacy =(data);
  })

}
}