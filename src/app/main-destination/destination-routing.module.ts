import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainDestinationComponent} from './main-destination.component';


const routes: Routes = [
  {path: '', component: MainDestinationComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule {
}
