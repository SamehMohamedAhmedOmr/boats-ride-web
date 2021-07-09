import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceDetailsComponent} from './service-details/service-details.component';
import {ServicesComponent} from './services.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      } ,
      {
        path: ':slug',
        component: ServiceDetailsComponent
      } ,
      {path: '**', redirectTo: '', pathMatch: ''},
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
