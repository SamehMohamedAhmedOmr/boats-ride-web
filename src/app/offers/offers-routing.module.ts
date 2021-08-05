import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OffersComponent} from './offers.component';
import {OfferDetailsComponent} from './offer-details/offer-details.component';
import {IndexComponent} from './index/index.component';



const routes: Routes = [ {
  path: '',
  component: OffersComponent,
  children: [
    {
      path: '',
      component: IndexComponent
    } ,
    {
      path: ':slug',
      component: OfferDetailsComponent
    } ,
    {path: '**', redirectTo: '', pathMatch: ''},
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
