import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import { ArticlesModule } from './modules/articles/articles.module';
import { ClientsModule } from './modules/clients/clients.module';
import { MedicinesModule } from './modules/medicines/medicines.module';
import { PharmaciesModule } from './modules/pharmacies/pharmacies.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { SharedModule } from './modules/shared/shared.module';
import { AdminModule } from './modules/admin/admin.module';
import { HomeModule } from './modules/home/home.module';

import { AppointmentModule } from './modules/appointment/appointment.module';
import { authInterceptorProviders } from './AuthInterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    ArticlesModule,
    AdminModule,
    ClientsModule,
    MedicinesModule,
    PharmaciesModule,
    QuestionsModule,
    SharedModule,
    HomeModule,
    AppointmentModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
