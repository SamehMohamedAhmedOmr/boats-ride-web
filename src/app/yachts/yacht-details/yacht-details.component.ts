import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {YachtService} from '../../../core/services/yacht.service';

@Component({
  selector: 'app-yacht-details',
  templateUrl: './yacht-details.component.html',
  styleUrls: ['./yacht-details.component.css']
})
export class YachtDetailsComponent implements OnInit {
  slug: any;
  yacht: any;
  showNavigationArrows = true;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig,
              private route: ActivatedRoute,
              private yachtServie: YachtService,
              private cdr: ChangeDetectorRef) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.getYacht();
  }

  getYacht() {
    this.yachtServie.getYacht(this.slug).subscribe(data => {
      this.yacht = data;
      this.cdr.markForCheck();
    });
  }
}
