import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrivacyAndPolicyComponent} from "../privacy-and-policy/privacy-and-policy.component";
import {IndexComponent} from "./index/index.component";
import {TermsAndConditionsComponent} from "./terms-and-conditions.component";


const routes: Routes = [{
  path: '',
  component: TermsAndConditionsComponent,
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
export class TermsAndConditionsRoutingModule { }
