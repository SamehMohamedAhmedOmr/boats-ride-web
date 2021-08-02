import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import {MainDestinationComponent} from './main-destination.component';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [MainDestinationComponent],
    imports: [
        CommonModule,
        DestinationRoutingModule,
        SharedModule,
        TranslateModule
    ]
})
export class DestinationModule { }
