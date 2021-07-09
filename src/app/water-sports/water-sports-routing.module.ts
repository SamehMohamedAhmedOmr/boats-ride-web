import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WaterSportsComponent} from './water-sports.component';
import {WateSportDetailsComponent} from './wate-sport-details/wate-sport-details.component';
import {IndexComponent} from './index/index.component';


const routes: Routes = [ {
  path: '',
  component: WaterSportsComponent,
  children: [
    {
      path: '',
      component: IndexComponent
    } ,
    {
      path: ':slug',
      component: WateSportDetailsComponent
    } ,
    {path: '**', redirectTo: '', pathMatch: ''},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterSportsRoutingModule { }
