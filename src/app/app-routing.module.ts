import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMgmtComponent } from './admin/user-management/user-mgmt/user-mgmt.component';
import {AdminComponent} from './admin/admin.component';
import {CreateUserMgmtComponent} from './admin/user-management/create-user-mgmt/create-user-mgmt.component'
import {ViewUserMgmtComponent} from './admin/user-management/view-user-mgmt/view-user-mgmt.component'
import {PersonalDetailsComponent} from './admin/user-management/personal-details/personal-details.component'
import {BorrowingDetailsComponent} from './admin/user-management/borrowing-details/borrowing-details.component'
import {EditUserMgmtComponent} from './admin/user-management/edit-user-personal-details/edit-user-personal-details.component'
import { EditUserBorrowingDetailsComponent} from './admin/user-management/edit-user-borrowing-details/edit-user-borrowing-details.component'
import{AboutUsEditComponent} from './admin/CMS/about-us-edit/about-us-edit.component'
import {AboutViewComponent} from './admin/CMS/about-view/about-view.component'
import {PrivacyEditComponent} from './admin/CMS/privacy-edit/privacy-edit.component'
import {PrivacyViewComponent} from './admin/CMS/privacy-view/privacy-view.component';
import {TermsEditComponent} from './admin/CMS/terms-edit/terms-edit.component';
import {TermsViewComponent} from './admin/CMS/terms-view/terms-view.component';
import {CookiesEditComponent} from './admin/CMS/cookies-edit/cookies-edit.component';
import {CookiesViewComponent} from './admin/CMS/cookies-view/cookies-view.component';
import {StaffComponent} from './admin/staff/staff/staff.component';
import {StaffCreateComponent} from './admin/staff/staff-create/staff-create.component';
import {StaffViewComponent} from './admin/staff/staff-view/staff-view.component';
import {StaffEditComponent} from './admin/staff/staff-edit/staff-edit.component';
import {CategoryViewComponent} from './admin/master-setting/category-view/category-view.component';
import {CategoryAddComponent} from './admin/master-setting/category-add/category-add.component';
import {CategoryEditComponent} from './admin/master-setting/category-edit/category-edit.component';
import {DashboardComponent} from './admin/dashboard/dashboard/dashboard.component';
import {AdminLoginComponent} from './admin/admin-login/admin-login.component';
import {CmsComponent} from './admin/CMS/cms/cms.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path :'login' , component:AdminLoginComponent},
  {path: 'admin' , component: AdminComponent , canActivate:[AuthGuard],
     children:[
       { path: 'user-management' , component: UserMgmtComponent},
       { path: 'create-user' , component: CreateUserMgmtComponent},
       {path:'view-user' , component:ViewUserMgmtComponent }  ,    
       {path:'personal-details/:id' , component:PersonalDetailsComponent } ,
       {path:'borrowing-details/:id',component:BorrowingDetailsComponent},
       {path : 'edit-personal-details/:id' , component:EditUserMgmtComponent},
       {path :'edit-borrowing-details/:id', component: EditUserBorrowingDetailsComponent},
       {path :'user-management', component:UserMgmtComponent},
       {path :'about-us-edit' , component:AboutUsEditComponent},
       {path : 'about' , component: AboutViewComponent},
       {path :'privacy-edit' , component:PrivacyEditComponent},
       {path :'privacy' , component:PrivacyViewComponent},
       {path:'terms-edit' , component :TermsEditComponent},
       {path :'terms' , component :TermsViewComponent},
       {path :'cookies-edit' , component:CookiesEditComponent},
       {path :'cookies' , component:CookiesViewComponent},
       {path :'staff' , component :StaffComponent},
       {path :'staff-create' , component:StaffCreateComponent},
       {path :'staff-view/:id' , component:StaffViewComponent},
       {path :'staff-edit/:id' , component:StaffEditComponent},
       {path :'category-view' , component:CategoryViewComponent},
       {path :'category-create' , component:CategoryAddComponent},
       {path :'category-edit/:id' , component:CategoryEditComponent},
       {path :'dashboard' , component:DashboardComponent},
       {path :'cms' ,component:CmsComponent}
       

     ]
    },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
