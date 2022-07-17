import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentHistoryComponent } from './components/appointment-history/appointment-history.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { CheckAppointmentComponent } from './components/check-appointment/check-appointment.component';
import { FuturAppointmentComponent } from './components/futur-appointment/futur-appointment.component';

const routes: Routes = [
  {
    path: '', component: AppointmentComponent, children: [
      {path: 'list/:id', component: AppointmentListComponent},
      {path: 'history/:id', component: AppointmentHistoryComponent},
      {path: 'future/:id', component: FuturAppointmentComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
