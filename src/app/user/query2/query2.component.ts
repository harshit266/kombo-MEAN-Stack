import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { MustMatch } from '../../helpers/must-match.validator';
import {Query2Service} from './query2.service';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  file;
  constructor(private route : ActivatedRoute ,
    private formBuilder: FormBuilder,
    private Query2Service:Query2Service,
    private title :Title
    ) { }
d;
amount;
  ngOnInit() {
    this.title.setTitle('Loan Query ');
    this.d = this.route.snapshot.paramMap.get("state");
    this.amount = this.route.snapshot.paramMap.get("amount_required");
    
    // console.log(this.d);
    // this.registerForm = this.formBuilder.group({
    //   billing_first_name: ['', Validators.required],
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required],
      // acceptTerms: [false, Validators.requiredTrue]
  // }, {
  //     validator: MustMatch('password', 'confirmPassword')
  // });
  }

  convertCoverImageBase64() {
    var fileReader = new FileReader();
   var refrence = this;
    fileReader.onload = function () {
    refrence.file = fileReader.result;  // data <-- in this var you have the file data in Base64 format
    
     };
    
    fileReader.readAsDataURL($('#file').prop('files')[0]);
    // console.log(this.file);
}



add(form){
  // console.log(form.value)
  this.Query2Service.add(form.value , this.file , this.amount , this.d);
}
}
