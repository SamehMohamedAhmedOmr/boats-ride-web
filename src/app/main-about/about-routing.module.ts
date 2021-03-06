import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainAboutComponent} from './main-about.component';


const routes: Routes = [
  {path: '', component: MainAboutComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
