import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SeoService} from "../../../core/services/seo.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  lang = localStorage.getItem('lang');

  constructor(private seoService: SeoService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getSeo();
  }

  getSeo() {
    this.seoService.Seo('policy-and-policy').subscribe(seo => {
      this.seoService.updateMetaTags(seo);
      this.cdr.markForCheck();
    });
  }
}
