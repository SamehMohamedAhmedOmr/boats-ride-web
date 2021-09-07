import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  lang = localStorage.getItem('lang');
  showNavigationArrows = true;
  showNavigationIndicators = false;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    {url:"assets/Banners/new/fishing.jpg",titleEn:"Fishing Trip",navigate:'/fishing-trip',titleAr:"رحلات صيد السمك"},
    {url:"assets/Banners/services-01-01.jpg",titleEn:"Services",navigate:'/services',titleAr:"الخدمات"},
    {url:"assets/Banners/new/water-sport.jpg",titleEn:"Water Sports",navigate:'/water-sports',titleAr:"العاب الماء"},
    {url:"assets/Banners/new/offer.jpg",titleEn:"Offers",navigate:'/offers',titleAr:"عروض"},
    {url:"assets/Banners/new/yachts-home.jpg",titleEn:"Yacht Rental",navigate:'/yachts',titleAr:"تأجير اليخوت"},
    {url:"assets/Banners/new/destination.jpg",titleEn:"Destination",navigate:'/destination',titleAr:"وجهة"}
  ];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

}
