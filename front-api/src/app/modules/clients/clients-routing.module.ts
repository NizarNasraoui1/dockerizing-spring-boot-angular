import { UserLoginComponent } from './user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckAccountComponent } from './check-account/check-account.component';
import { SignUpDoctorComponent } from './sign-up-doctor/sign-up-doctor.component';
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';

const routes: Routes = [
  {path:"viewDoctors",component:ViewDoctorsComponent},
  {path:"profile",component:CheckAccountComponent},
  {path:"signUp/user",component:SignUpUserComponent},
  {path:"signUp/doctor",component:SignUpDoctorComponent},
  {path:"login",component:UserLoginComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
