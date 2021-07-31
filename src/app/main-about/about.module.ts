import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import {MainAboutComponent} from './main-about.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [MainAboutComponent],
    imports: [
        CommonModule,
        AboutRoutingModule,
        IvyCarouselModule,
        TranslateModule
    ]
})
export class AboutModule { }
