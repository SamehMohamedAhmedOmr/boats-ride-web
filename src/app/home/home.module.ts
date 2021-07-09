import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SeachPopUpComponent} from './seach-pop-up/seach-pop-up.component';
import {FeatureReserveComponent} from './feature-reserve/feature-reserve.component';
import {BannerComponent} from './banner/banner.component';
import {BookingSectionComponent} from './booking-section/booking-section.component';
import {MapComponent} from './map/map.component';
import {AboutComponent} from './about/about.component';
import {TestmoinailsComponent} from './testmoinails/testmoinails.component';
import {FluidsComponent} from './fluids/fluids.component';
import {NewsComponent} from './news/news.component';
import {FishingSectionComponent} from './fishing-section/fishing-section.component';
import {SharedModule} from '../../shared/shared.module';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    HomeComponent,
    SeachPopUpComponent,
    BannerComponent,
    FeatureReserveComponent,
    BookingSectionComponent,
    MapComponent,
    AboutComponent,
    TestmoinailsComponent,
    FluidsComponent,
    NewsComponent,
    FishingSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbCarouselModule,
    IvyCarouselModule
  ]
})
export class HomeModule {
}
