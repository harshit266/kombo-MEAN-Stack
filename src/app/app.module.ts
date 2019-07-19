import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http' ;
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserMgmtComponent } from './admin/user-management/create-user-mgmt/create-user-mgmt.component';
import { ViewUserMgmtComponent } from './admin/user-management/view-user-mgmt/view-user-mgmt.component';
import { UserMgmtComponent } from './admin/user-management/user-mgmt/user-mgmt.component';
import {AdminComponent} from './admin/admin.component'
import { HttpClientModule } from '@angular/common/http'; 
import { PersonalDetailsComponent } from './admin/user-management/personal-details/personal-details.component';
import { BorrowingDetailsComponent } from './admin/user-management/borrowing-details/borrowing-details.component'

import {DataTableModule} from "angular-6-datatable";
import {EditPersonalDetailsService} from './admin/user-management/edit-user-personal-details/edit-personal-details.service'
import {ViewUserMgmtService} from './admin/user-management/view-user-mgmt/view-user-mgmt.service';
import {PersonalService} from './admin/user-management/personal-details/personal.service'
import {BorrowingService} from './admin/user-management/borrowing-details/borrowing.service'
import {CreateUserMgmtService} from 'src/app/admin/user-management/create-user-mgmt/create-user-mgmt.service';
import { EditUserMgmtComponent } from './admin/user-management/edit-user-personal-details/edit-user-personal-details.component';
import { EditUserBorrowingDetailsComponent } from './admin/user-management/edit-user-borrowing-details/edit-user-borrowing-details.component'
import {EditUserBorrowingDetailsService} from './admin/user-management/edit-user-borrowing-details/edit-user-borrowing-details.service';
import { AboutUsEditComponent } from './admin/CMS/about-us-edit/about-us-edit.component';
import { AboutViewComponent } from './admin/CMS/about-view/about-view.component'
import {AboutViewService} from './admin/CMS/about-view/about-view.service';
import { PrivacyEditComponent } from './admin/CMS/privacy-edit/privacy-edit.component';
import { PrivacyViewComponent } from './admin/CMS/privacy-view/privacy-view.component';
import{ PrivacyEditService} from './admin/CMS/privacy-edit/privacy-edit.service';
import {PrivacyViewService} from './admin/CMS/privacy-view/privacy-view.service';
import { TermsViewComponent } from './admin/CMS/terms-view/terms-view.component';
import { TermsEditComponent } from './admin/CMS/terms-edit/terms-edit.component';
import {TermsEditService} from './admin/CMS/terms-edit/terms-edit.service';
import {TermsViewService} from './admin/CMS/terms-view/terms-view.service';
import { CookiesViewComponent } from './admin/CMS/cookies-view/cookies-view.component';
import { CookiesEditComponent } from './admin/CMS/cookies-edit/cookies-edit.component';
import {CookiesViewService } from './admin/CMS/cookies-view/cookies-view.service';
import {CookiesEditService} from './admin/CMS/cookies-edit/cookies-edit.service';
import { ViewQueryComponent } from './admin/query-management/view-query/view-query.component';
import { StaffCreateComponent } from './admin/staff/staff-create/staff-create.component';
import { StaffEditComponent } from './admin/staff/staff-edit/staff-edit.component';
import { StaffViewComponent } from './admin/staff/staff-view/staff-view.component';
import { StaffComponent } from './admin/staff/staff/staff.component';
import {StaffService} from './admin/staff/staff/staff.service';
import {StaffCreateService} from './admin/staff/staff-create/staff-create.service';
import {StaffViewService} from './admin/staff/staff-view/staff-view.service';
import {StaffEditService} from './admin/staff/staff-edit/staff-edit.service';
import { CategoryViewComponent } from './admin/master-setting/category-view/category-view.component';
import { CategoryAddComponent } from './admin/master-setting/category-add/category-add.component';
import { CategoryEditComponent } from './admin/master-setting/category-edit/category-edit.component';
import {CategoryViewService} from './admin/master-setting/category-view/category-view.service';
import {CategoryEditService} from './admin/master-setting/category-edit/category-edit.service';
import { MatDialogModule, MatButtonModule  ,MatFormFieldModule,MatInputModule,
  MatRippleModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateUserMgmtComponent,
    ViewUserMgmtComponent,
    UserMgmtComponent,
    AdminComponent,
    PersonalDetailsComponent,
    BorrowingDetailsComponent,
    EditUserMgmtComponent,
    EditUserBorrowingDetailsComponent,
    AboutUsEditComponent,
    AboutViewComponent,
    PrivacyEditComponent,
    PrivacyViewComponent,
    TermsViewComponent,
    TermsEditComponent,
    CookiesViewComponent,
    CookiesEditComponent,
    ViewQueryComponent,
    StaffCreateComponent,
    StaffEditComponent,
    StaffViewComponent,
    StaffComponent,
    CategoryViewComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    DashboardComponent,
    AdminLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    DataTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule
    // QuillModule.forRoot()
  ],
  providers: [
    CreateUserMgmtService,
    ViewUserMgmtService,
    PersonalService,
    BorrowingService,
    EditPersonalDetailsService,
    EditUserBorrowingDetailsService,
    AboutViewService,
    PrivacyEditService ,
    PrivacyViewService,
    TermsEditService,
    TermsViewService,
    CookiesViewService ,
    CookiesEditService ,
    StaffService,
    StaffCreateService,
    StaffViewService,
    StaffEditService,
    CategoryViewService,
    CategoryEditService
  ],
  entryComponents: [
    CategoryAddComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
