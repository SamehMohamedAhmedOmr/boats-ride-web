import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {YachtsComponent} from './yachts.component';
import {YachtDetailsComponent} from './yacht-details/yacht-details.component';
import {IndexComponent} from './index/index.component';
import {VoucherComponent} from './voucher/voucher.component';


const routes: Routes = [
  {
    path: '',
    component: YachtsComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      } ,
      {
        path: ':slug',
        component: YachtDetailsComponent
      } ,
      {
        path: 'voucher/:booking_number',
        component: VoucherComponent
      } ,
      {path: '**', redirectTo: '', pathMatch: ''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YachtsRoutingModule { }
