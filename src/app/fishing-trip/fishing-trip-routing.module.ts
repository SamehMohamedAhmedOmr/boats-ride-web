import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FishingTripComponent} from './fishing-trip.component';


const routes: Routes = [
  {path: '', component: FishingTripComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishingTripRoutingModule {
}
