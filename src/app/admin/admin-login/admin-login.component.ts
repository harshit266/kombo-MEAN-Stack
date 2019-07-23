import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from './admin-login.service';
import { Router } from '@angular/router';
import { AuthService} from '../../auth.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminLoginService: AdminLoginService, 
              private router:Router,
              private  Auth : AuthService) {

  }

  ngOnInit() {

  }

  checkAdminCredentials(form) {
    this.adminLoginService.checkLoginCredentials(form.value)
    .subscribe(
      data => {
          if(data['code'] == 200){
              this.router.navigate([`admin/dashboard`]);
              this.Auth.setLoggedIn(true)
            }else{
              alert(data['msg']);
            }
          },
      error => { console.log(error); // Error if any
      });

  }


}
