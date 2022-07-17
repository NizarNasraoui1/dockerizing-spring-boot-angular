import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng-lts/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from 'primeng-lts/button';

@NgModule({
  declarations: [
    AdminLoginComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    ButtonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AdminModule { }
