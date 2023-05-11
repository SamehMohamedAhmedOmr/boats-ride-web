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
import {ThemeModule} from '../theme/theme.module';
import {TranslateModule} from '@ngx-translate/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from "@angular/material/input";
import { RentalYachtDubaiComponent } from './feature-reserve/rental-yacht-dubai/rental-yacht-dubai.component';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import { FeatureParagraphArabicComponent } from './feature-reserve/translate/feature-paragraph-arabic/feature-paragraph-arabic.component';
import { FeatureParagraphEnglishComponent } from './feature-reserve/translate/feature-paragraph-english/feature-paragraph-english.component';
import { ArabicTextComponent } from './feature-reserve/rental-yacht-dubai/arabic-text/arabic-text.component';
import { EnglishTextComponent } from './feature-reserve/rental-yacht-dubai/english-text/english-text.component';
import { ServiceSliderComponent } from './feature-reserve/rental-yacht-dubai/service-slider/service-slider.component';
import { ServicesBoxComponent } from './feature-reserve/rental-yacht-dubai/services-box/services-box.component';
import { YachtVideoComponent } from './yacht-video/yacht-video.component';
import { FaqComponent } from './faq/faq.component';


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
    FishingSectionComponent,
    RentalYachtDubaiComponent,
    FeatureParagraphArabicComponent,
    FeatureParagraphEnglishComponent,
    ArabicTextComponent,
    EnglishTextComponent,
    ServiceSliderComponent,
    ServicesBoxComponent,
    YachtVideoComponent,
    FaqComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        NgbCarouselModule,
        IvyCarouselModule,
        ThemeModule,
        TranslateModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        NgxSkeletonLoaderModule
    ]
})
export class HomeModule {
}
