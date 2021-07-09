import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import {MainDestinationComponent} from './main-destination.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [MainDestinationComponent],
  imports: [
    CommonModule,
    DestinationRoutingModule,
    SharedModule
  ]
})
export class DestinationModule { }
