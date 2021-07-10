import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecondryFooterComponent} from './secondry-footer/secondry-footer.component';
import {SecondryHeaderComponent} from './secondry-header/secondry-header.component';
import {FooterComponent} from './footer/footer.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { MenuHeaderComponent } from './secondry-header/menu-header/menu-header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [SecondryFooterComponent, SecondryHeaderComponent,FooterComponent, MenuHeaderComponent],
  imports: [
    CommonModule,
    NgbCarouselModule,
    RouterModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports:[
    SecondryFooterComponent, SecondryHeaderComponent,FooterComponent
  ]
})
export class ThemeModule {
}
