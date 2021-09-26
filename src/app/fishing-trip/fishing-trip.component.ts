import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {SeoService} from "../../core/services/seo.service";

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


  constructor(config: NgbCarouselConfig,
              private seoService: SeoService,
              private cdr: ChangeDetectorRef) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
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
