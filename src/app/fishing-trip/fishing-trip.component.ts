import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {SeoService} from "../../core/services/seo.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-fishing-trip',
  templateUrl: './fishing-trip.component.html',
  styleUrls: ['./fishing-trip.component.css']
})
export class FishingTripComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = true;
  showNavigationArrows1 = true;
  showNavigationIndicators1 = false;
  isBrowser: boolean = false;


  constructor(config: NgbCarouselConfig,
              private seoService: SeoService,
              @Inject(PLATFORM_ID) private platformId: any,
              private cdr: ChangeDetectorRef) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.getSeo();
  }

  getSeo() {
    this.seoService.Seo('fishing-trip').subscribe(seo => {
      this.seoService.updateMetaTags(seo);
      this.cdr.markForCheck();
    });
  }

}
