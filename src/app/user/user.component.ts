import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import {UserService } from './user.service';
import { Router } from '@angular/router';
import { PersistenceService } from 'angular-persistence';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
x;
  constructor(private UserService :UserService ,
     private router :Router ,
     private persistenceService:PersistenceService
    
    ) { }

  ngOnInit() {
    $('#sign-in-button').click(function(){
         
      $('#sign_in').fadeIn({queue: false, duration: 'slow'});


})
       $('.cross').click(function(){
     
      $('#sign_in').fadeOut({queue: false, duration: 'slow'});
      

})

       $('#forgot-password-button').click(function(){
$('#forgot-password-email').fadeIn({queue: false, duration: 'slow'});
$('#sign-in-form').fadeOut( {queue: false, duration: 'slow'});
$('#sign-in-form').animate({ 'left': "-700px" }, 'slow');

})

          $('#forgot-password-email-button').click(function(){
$('#forgot-password').fadeIn({queue: false, duration: 'slow'});
$('#forgot-password-email').fadeOut( {queue: false, duration: 'slow'});
$('#forgot-password-email').animate({ 'left': "-700px" }, 'slow');

})

  }



  signIn(form){
    // alert("Submit Button Clicked")
    console.log(form.value)
    this.x=form.value;
    this.UserService.checkLoginCredentials(form.value)
    .subscribe(
      data => {
          if(data['code'] == 200){
              // this.router.navigate([`admin/dashboard`]);
              this.persistenceService.set('email', this.x.username);
              // console.log(this.persistenceService.get('email'))
              console.log("Succesfully Signed In ")
              // this.Auth.setLoggedIn(true)
              this.router.navigate([`userLogin`]);

            }else{
              alert(data['msg']);
            }
          },
      error => { console.log(error); // Error if any
      });
  }

  forgotPassword(form){
    // alert("forgot password")
    console.log(form.value)
    this.x=form.value
    this.UserService.forgotPassword(form.value)
  }
  checkOtp(f){
    // alert("forgot password")
    console.log(f.value)
    this.UserService.checkOtp(f.value)
    .subscribe(
      data => {
          if(data['code'] == 200){
            // console.log(f.email)
            // alert(data['id'])
            this.router.navigate(['change-password/',data['id']]);
            //   console.log("Succesfully Signed In ")
              // this.Auth.setLoggedIn(true)
            }else{
              alert(data['msg']);
            }
          },
      error => { console.log(error); // Error if any
      });
  }
  
}
