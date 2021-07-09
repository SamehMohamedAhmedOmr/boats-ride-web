import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import {MainAboutComponent} from './main-about.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [MainAboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    IvyCarouselModule
  ]
})
export class AboutModule { }
