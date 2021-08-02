import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FishingTripRoutingModule } from './fishing-trip-routing.module';
import {FishingTripComponent} from './fishing-trip.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [FishingTripComponent],
    imports: [
        CommonModule,
        FishingTripRoutingModule,
        NgbCarouselModule,
        SharedModule,
        TranslateModule
    ]
})
export class FishingTripModule { }
