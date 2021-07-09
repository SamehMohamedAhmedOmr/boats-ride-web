import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YachtsRoutingModule } from './yachts-routing.module';
import { YachtsComponent } from './yachts.component';
import { IndexComponent } from './index/index.component';
import {SharedModule} from '../../shared/shared.module';
import {YachtDetailsComponent} from './yacht-details/yacht-details.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [YachtsComponent, IndexComponent,YachtDetailsComponent],

  imports: [
    CommonModule,
    YachtsRoutingModule,
    SharedModule,
    NgbCarouselModule
  ]
})
export class YachtsModule { }
