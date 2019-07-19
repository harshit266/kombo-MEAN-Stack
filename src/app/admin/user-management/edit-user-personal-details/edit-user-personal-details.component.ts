import { Component, OnInit } from '@angular/core';
import {User} from '../../../../server/src/api/v1/user/user.model.js'
import { ActivatedRoute } from "@angular/router";
import {EditPersonalDetailsService} from './edit-personal-details.service'
import {PersonalService} from '../personal-details/personal.service'
import { FormGroup,FormsModule,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-user-mgmt',
  templateUrl: './edit-user-personal-details.component.html',
  styleUrls: ['./edit-user-personal-details.component.css']
})
export class EditUserMgmtComponent implements OnInit {
  angForm: FormGroup;
  user:User[]
  constructor( private PersonalService:PersonalService,private route: ActivatedRoute , private EditPersonalDetailsService : EditPersonalDetailsService) { }
  id;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.PersonalService
    .getProducts(this.id)
    .subscribe((data: User[]) => {
      console.log(data , this.id)
      this.user = Array.of(data);
      console.log(this.user)
  });
  }
  
  updateUser(form){
    console.log("-----------",form.value)
    this.EditPersonalDetailsService.updateUser(form.value , this.id);
  }
}
