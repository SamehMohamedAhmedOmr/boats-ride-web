import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YachtRentalComponent} from './yacht-rental/yacht-rental.component';
import {PopularDestinationComponent} from './popular-destination/popular-destination.component';
import {ServiceSectionComponent} from './service-section/service-section.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {DestinationComponent} from './destination/destination.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {YachtBookingFormComponent} from './yacht-booking-form/yacht-booking-form.component';
import {WaterSportBookingFormComponent} from './water-sport-booking-form/water-sport-booking-form.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ReactiveFormsModule} from "@angular/forms";
import {SuccessBookingComponent} from './success-booking/success-booking.component';
import {MatInputModule} from "@angular/material/input";
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


@NgModule({
  declarations: [
    YachtRentalComponent,
    ServiceSectionComponent,
    PopularDestinationComponent,
    DestinationComponent,
    YachtBookingFormComponent,
    WaterSportBookingFormComponent,
    ContactFormComponent,
    SuccessBookingComponent,
    ComingSoonComponent,
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    RouterModule,
    NgxSkeletonLoaderModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    TranslateModule
  ],

  exports: [
    YachtRentalComponent,
    ServiceSectionComponent,
    PopularDestinationComponent,
    DestinationComponent,
    YachtBookingFormComponent,
    WaterSportBookingFormComponent,
    ContactFormComponent,
    ComingSoonComponent,
  ],
  entryComponents: [
    YachtBookingFormComponent,
    WaterSportBookingFormComponent,
    ContactFormComponent,
  ]
})

export class SharedModule {
}
