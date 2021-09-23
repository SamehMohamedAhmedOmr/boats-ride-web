import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PrivacyAndPolicyComponent} from "./privacy-and-policy.component";
import {IndexComponent} from "./index/index.component";


const routes: Routes = [{
  path: '',
  component: PrivacyAndPolicyComponent,
  children: [
    {
      path: '',
      component: IndexComponent
    },
    {path: '**', redirectTo: '', pathMatch: ''},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyAndPolicyRoutingModule {
}
