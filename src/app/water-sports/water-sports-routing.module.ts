import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WaterSportsComponent} from './water-sports.component';
import {WateSportDetailsComponent} from './wate-sport-details/wate-sport-details.component';
import {IndexComponent} from './index/index.component';
import {VoucherComponent} from './voucher/voucher.component';


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
    {
      path: 'voucher/:booking_number',
      component: VoucherComponent
    } ,
    {path: '**', redirectTo: '', pathMatch: ''},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterSportsRoutingModule { }
