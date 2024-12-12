import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {LocalStorageService} from "../../../core/services/localStorage.service";
import {isPlatformBrowser} from "@angular/common";
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  lang:string | null = 'en';
  showNavigationArrows = false;
  showNavigationIndicators = false;
  isBrowser: boolean = false;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    // {url:"assets/Banners/new/yacht1.png",titleEn:"yacht rental dubai",navigate:'/yachts',titleAr:"تأجير اليخوت في دبي"},
    // {url:"assets/Banners/new/yacht2.png",titleEn:"yacht with slide",navigate:'/yachts/majesty-56ft',titleAr:"يخت مع الشريحة"},
    // {url:"assets/Banners/new/Jet car 2.png",titleEn:"Jet car dubai",navigate:'/yachts/luxury-jet-car',titleAr:"جت كار دبي"},
    // {url:"assets/Banners/new/yacht3.png",titleEn:"yacht with jacuzzi",navigate:'/yachts/azimut-with-jacuzzi-80ft',titleAr:"يخت مع جاكوزي"},
    {url:"assets/Banners/new/yacht5.png",titleEn:"yacht birthday party",navigate:'/services/birthday-party',titleAr:"حفلة عيد ميلاد اليخت"}
  ];
  constructor(config: NgbCarouselConfig,
              @Inject(PLATFORM_ID) private platformId: any,
              private localStorageService: LocalStorageService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.lang = this.localStorageService.getItem('lang');
  }

}
