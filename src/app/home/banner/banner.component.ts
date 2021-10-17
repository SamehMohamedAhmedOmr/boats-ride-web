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
  showNavigationArrows = true;
  showNavigationIndicators = false;
  isBrowser: boolean = false;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    {url:"assets/Banners/new/fishing.jpg",titleEn:"Fishing Trip",navigate:'/fishing-trip',titleAr:"رحلات صيد السمك"},
    {url:"assets/Banners/new/services.png",titleEn:"Services",navigate:'/services',titleAr:"الخدمات"},
    {url:"assets/Banners/new/water-sport.png",titleEn:"Water Sports",navigate:'/water-sports',titleAr:"العاب الماء"},
    {url:"assets/Banners/new/offer.jpg",titleEn:"Offers",navigate:'/offers',titleAr:"عروض"},
    {url:"assets/Banners/new/yachts-home.png",titleEn:"Yacht Rental",navigate:'/yachts',titleAr:"تأجير اليخوت"},
    {url:"assets/Banners/new/destination.jpg",titleEn:"Destination",navigate:'/destination',titleAr:"وجهة"}
  ];
  constructor(config: NgbCarouselConfig,
              @Inject(PLATFORM_ID) private platformId: any,
              private localStorageService: LocalStorageService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.lang = this.localStorageService.getItem('lang');
  }

}
