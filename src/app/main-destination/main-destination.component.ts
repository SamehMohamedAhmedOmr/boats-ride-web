import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SeoService} from "../../core/services/seo.service";

@Component({
  selector: 'app-main-destination',
  templateUrl: './main-destination.component.html',
  styleUrls: ['./main-destination.component.css']
})
export class MainDestinationComponent implements OnInit {

  constructor(private seoService: SeoService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getSeo();
  }

  getSeo() {
    this.seoService.Seo('destination').subscribe(seo => {
      this.seoService.updateMetaTags(seo);
      this.cdr.markForCheck();
    });
  }
}
