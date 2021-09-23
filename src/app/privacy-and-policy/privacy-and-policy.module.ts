import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrivacyAndPolicyRoutingModule} from './privacy-and-policy-routing.module';
import {PrivacyAndPolicyComponent} from './privacy-and-policy.component';
import {IndexComponent} from './index/index.component';
import {IndexArComponent} from './index/index-ar/index-ar.component';
import {IndexEnComponent} from './index/index-en/index-en.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [PrivacyAndPolicyComponent, IndexComponent, IndexArComponent, IndexEnComponent],
  imports: [
    CommonModule,
    PrivacyAndPolicyRoutingModule,
    TranslateModule
  ]
})
export class PrivacyAndPolicyModule {
}
