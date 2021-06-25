import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-yacht-details',
  templateUrl: './yacht-details.component.html',
  styleUrls: ['./yacht-details.component.css']
})
export class YachtDetailsComponent implements OnInit {

  showNavigationArrows = true;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

}
