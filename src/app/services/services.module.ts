import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServicesRoutingModule} from './services-routing.module';
import {IndexComponent} from './index/index.component';
import {SharedModule} from '../../shared/shared.module';
import {ServicesComponent} from './services.component';
import {ServiceDetailsComponent} from './service-details/service-details.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [IndexComponent, ServicesComponent, ServiceDetailsComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    NgbCarouselModule
  ]
})
export class ServicesModule {
}
