import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OffersComponent} from './offers.component';


const routes: Routes = [
  {path: '', component: OffersComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
