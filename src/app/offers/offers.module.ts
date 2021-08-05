import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import {OffersComponent} from './offers.component';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {TranslateModule} from '@ngx-translate/core';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [OffersComponent, OfferDetailsComponent, IndexComponent],
    imports: [
        CommonModule,
        OffersRoutingModule,
        NgxSkeletonLoaderModule,
        TranslateModule
    ]
})
export class OffersModule { }
