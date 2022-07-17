import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './modules/home/home-screen/home-screen.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule) },
      { path: 'admin', loadChildren: () => import(`./modules/admin/admin.module`).then(m => m.AdminModule) },
      { path: 'client', loadChildren: () => import(`./modules/clients/clients.module`).then(m => m.ClientsModule) },
      { path: 'questions', loadChildren: () => import(`./modules/questions/questions.module`).then(m => m.QuestionsModule) },
      { path: 'appointment', loadChildren: () => import('./modules/appointment/appointment.module').then((mod) => mod.AppointmentModule) },
      { path: 'article', loadChildren: () => import('./modules/articles/articles.module').then((mod) => mod.ArticlesModule) }
    ],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
