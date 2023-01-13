import {Component, HostListener, Inject, OnInit, PLATFORM_ID, Input} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {LocalStorageService} from "../../../core/services/localStorage.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css','./footer.scss']
})
export class FooterComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  isShow: boolean | undefined;
  topPosToStartShowing = 100;
  lang:string | null = 'en';
  isBrowser: boolean = false;

  @Input() settings: any;

  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  constructor(config: NgbCarouselConfig,
              @Inject(PLATFORM_ID) private platformId: any,
              private localStorageService: LocalStorageService) {
    // customize default values of carousels used by this component tree
    this.isBrowser = isPlatformBrowser(platformId);
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit(): void {
    this.lang = this.localStorageService.getItem('lang');
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
