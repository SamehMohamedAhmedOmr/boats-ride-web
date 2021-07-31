import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {CommonInterceptor} from './common.interceptor';
import {SharedModule} from '../shared/shared.module';
import {HomeModule} from './home/home.module';
import {ThemeModule} from './theme/theme.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {NgxUiLoaderConfig, NgxUiLoaderModule} from 'ngx-ui-loader';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HeaderComponent} from './header/header.component';
import {LanguageService} from '../core/services/language-services.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "red",
  "bgsOpacity": 0.4,
  "bgsPosition": "bottom-right",
  "bgsSize": 20,
  "blur": 0,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "rgba(40, 40, 40, 0.8)",
  "fgsPosition": "center-center",
  "fgsSize": 20,
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "assets/images/preloader.svg",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    NgbModule,
    IvyCarouselModule,
    HttpClientModule,
    SharedModule,
    ThemeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxSkeletonLoaderModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HomeModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true},
    LanguageService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
