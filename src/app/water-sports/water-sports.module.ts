import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaterSportsRoutingModule } from './water-sports-routing.module';
import { IndexComponent } from './index/index.component';
import {WaterSportsComponent} from './water-sports.component';
import {WateSportDetailsComponent} from './wate-sport-details/wate-sport-details.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {SharedModule} from '../../shared/shared.module';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import { VoucherComponent } from './voucher/voucher.component';
import {TranslateModule} from '@ngx-translate/core';
import {NgxGalleryModule} from "@kolkov/ngx-gallery";
import { RecommendedComponent } from './index/recommended/recommended.component';
import { DestinationWidgetComponent } from './index/destination-widget/destination-widget.component';
import { OffersWidgetComponent } from './index/offers-widget/offers-widget.component';


@NgModule({
  declarations: [IndexComponent,WaterSportsComponent,WateSportDetailsComponent, VoucherComponent, RecommendedComponent, DestinationWidgetComponent, OffersWidgetComponent],
    imports: [
        CommonModule,
        WaterSportsRoutingModule,
        IvyCarouselModule,
        SharedModule,
        NgbCarouselModule,
        NgxSkeletonLoaderModule,
        TranslateModule,
        NgxGalleryModule
    ]
})
export class WaterSportsModule { }
