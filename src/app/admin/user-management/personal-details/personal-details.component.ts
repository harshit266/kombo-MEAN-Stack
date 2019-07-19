import { Component, OnInit } from '@angular/core';
import {PersonalService} from './personal.service';
import {User} from '../../../../server/src/api/v1/user/user.model.js'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  user: User[];
  constructor(private PersonalService:PersonalService , private route: ActivatedRoute) { }
  id;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    // console.log(this.id)
    this.PersonalService
    .getProducts(this.id)
    .subscribe((data: User[]) => {
      console.log(data , this.id)
      this.user = Array.of(data);
      console.log(this.user)
  });
  }

}
