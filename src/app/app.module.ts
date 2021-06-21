import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SeachPopUpComponent } from './home/seach-pop-up/seach-pop-up.component';
import { BannerComponent } from './home/banner/banner.component';
import { FeatureReserveComponent } from './home/feature-reserve/feature-reserve.component';
import { DestinationComponent } from './home/destination/destination.component';
import { BookingSectionComponent } from './home/booking-section/booking-section.component';
import { YachtRentalComponent } from './home/yacht-rental/yacht-rental.component';
import { MapComponent } from './home/map/map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceSectionComponent } from './home/service-section/service-section.component';
import { AboutComponent } from './home/about/about.component';
import { TestmoinailsComponent } from './home/testmoinails/testmoinails.component';
import { FluidsComponent } from './home/fluids/fluids.component';
import { NewsComponent } from './home/news/news.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { PopularDestinationComponent } from './home/popular-destination/popular-destination.component';
import { ContactComponent } from './contact/contact.component';
import { SecondryHeaderComponent } from './secondry-header/secondry-header.component';
import { SecondryFooterComponent } from './secondry-footer/secondry-footer.component';
import { OffersComponent } from './offers/offers.component';
import { MainAboutComponent } from './main-about/main-about.component';
import { MainYachtRentalComponent } from './main-yacht-rental/main-yacht-rental.component';
import { FishingSectionComponent } from './home/fishing-section/fishing-section.component';
import { MainDestinationComponent } from './main-destination/main-destination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SeachPopUpComponent,
    BannerComponent,
    FeatureReserveComponent,
    DestinationComponent,
    BookingSectionComponent,
    YachtRentalComponent,
    MapComponent,
    ServiceSectionComponent,
    AboutComponent,
    TestmoinailsComponent,
    FluidsComponent,
    NewsComponent,
    PopularDestinationComponent,
    ContactComponent,
    SecondryHeaderComponent,
    SecondryFooterComponent,
    OffersComponent,
    MainAboutComponent,
    MainYachtRentalComponent,
    FishingSectionComponent,
    MainDestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
