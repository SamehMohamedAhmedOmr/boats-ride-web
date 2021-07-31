import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import {OffersComponent} from './offers.component';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [OffersComponent],
    imports: [
        CommonModule,
        OffersRoutingModule,
        NgxSkeletonLoaderModule,
        TranslateModule
    ]
})
export class OffersModule { }
