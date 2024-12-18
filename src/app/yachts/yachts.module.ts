import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YachtsRoutingModule} from './yachts-routing.module';
import {YachtsComponent} from './yachts.component';
import {IndexComponent} from './index/index.component';
import {SharedModule} from '../../shared/shared.module';
import {YachtDetailsComponent} from './yacht-details/yacht-details.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {VoucherComponent} from './voucher/voucher.component';
import {TranslateModule} from '@ngx-translate/core';
import {DestinationsSpecificationComponent} from './yacht-details/destinations-specification/destinations-specification.component';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';
import {ArabicTextComponent} from './index/translate/arabic-text/arabic-text.component';
import {EnglishTextComponent} from './index/translate/english-text/english-text.component';
import { NewYearYachtsComponent } from './new-year-yachts/new-year-yachts.component';


@NgModule({
  declarations: [
    YachtsComponent, IndexComponent, YachtDetailsComponent, VoucherComponent,
    DestinationsSpecificationComponent, ArabicTextComponent, EnglishTextComponent, NewYearYachtsComponent
  ],

  imports: [
    CommonModule,
    YachtsRoutingModule,
    SharedModule,
    NgbCarouselModule,
    NgxSkeletonLoaderModule,
    TranslateModule,
    NgxGalleryModule,
  ]
})
export class YachtsModule {
}
