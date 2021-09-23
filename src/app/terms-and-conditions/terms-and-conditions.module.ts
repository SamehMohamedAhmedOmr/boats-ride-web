import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsAndConditionsRoutingModule } from './terms-and-conditions-routing.module';
import { TermsAndConditionsComponent } from './terms-and-conditions.component';
import { IndexComponent } from './index/index.component';
import { IndexArComponent } from './index/index-ar/index-ar.component';
import { IndexEnComponent } from './index/index-en/index-en.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [TermsAndConditionsComponent, IndexComponent, IndexArComponent, IndexEnComponent],
  imports: [
    CommonModule,
    TermsAndConditionsRoutingModule,
    TranslateModule
  ]
})
export class TermsAndConditionsModule { }
