import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YachtRentalComponent} from './yacht-rental/yacht-rental.component';
import {PopularDestinationComponent} from './popular-destination/popular-destination.component';
import {ServiceSectionComponent} from './service-section/service-section.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {DestinationComponent} from './destination/destination.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    YachtRentalComponent,
    ServiceSectionComponent,
    PopularDestinationComponent,
    DestinationComponent,
  ],
    imports: [
        CommonModule,
        IvyCarouselModule,
        RouterModule,
        TranslateModule
    ],
  exports: [
    YachtRentalComponent,
    ServiceSectionComponent,
    PopularDestinationComponent,
    DestinationComponent
  ],
})
export class SharedModule {
}
