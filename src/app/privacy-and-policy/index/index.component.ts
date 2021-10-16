import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SeoService} from "../../../core/services/seo.service";
import {LocalStorageService} from "../../../core/services/localStorage.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  lang:string | null = 'en';

  constructor(private seoService: SeoService,
              private localStorageService: LocalStorageService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.lang = this.localStorageService.getItem('lang');
    this.getSeo();
  }

  getSeo() {
    this.seoService.Seo('policy-and-policy').subscribe(seo => {
      this.seoService.updateMetaTags(seo);
      this.cdr.markForCheck();
    });
  }
}
