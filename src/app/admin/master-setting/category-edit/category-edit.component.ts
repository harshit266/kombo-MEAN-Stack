import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {CategoryViewService} from '../category-view/category-view.service';
import {Category} from '../../../../server/src/api/v1/master_setting/master.model';
import { FormGroup,FormsModule,  FormBuilder,  Validators } from '@angular/forms';
import {CategoryEditService} from './category-edit.service';
@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
id;
user;
  constructor(private route: ActivatedRoute,private CategoryViewService:CategoryViewService , private CategoryEditService:CategoryEditService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.CategoryViewService
    .getCategorys(this.id)
    .subscribe((data: Category[]) => {
      console.log(data , this.id)
      this.user = Array.of(data);
      console.log(this.user)
  });
  }
  updateCategory(form){
    console.log("-----------",form.value)
    this.CategoryEditService.updateCategory(form.value , this.id);
  }

}
