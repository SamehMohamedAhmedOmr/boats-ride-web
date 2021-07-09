import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaterSportsRoutingModule } from './water-sports-routing.module';
import { IndexComponent } from './index/index.component';
import {WaterSportsComponent} from './water-sports.component';
import {WateSportDetailsComponent} from './wate-sport-details/wate-sport-details.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {SharedModule} from '../../shared/shared.module';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [IndexComponent,WaterSportsComponent,WateSportDetailsComponent],
  imports: [
    CommonModule,
    WaterSportsRoutingModule,
    IvyCarouselModule,
    SharedModule,
    NgbCarouselModule
  ]
})
export class WaterSportsModule { }
