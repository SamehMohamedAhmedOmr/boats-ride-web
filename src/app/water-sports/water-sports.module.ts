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


@NgModule({
  declarations: [IndexComponent,WaterSportsComponent,WateSportDetailsComponent, VoucherComponent],
    imports: [
        CommonModule,
        WaterSportsRoutingModule,
        IvyCarouselModule,
        SharedModule,
        NgbCarouselModule,
        NgxSkeletonLoaderModule,
        TranslateModule
    ]
})
export class WaterSportsModule { }
