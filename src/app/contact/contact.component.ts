import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SeoService} from "../../core/services/seo.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private seoService: SeoService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getSeo();
  }

  getSeo() {
    this.seoService.Seo('contact').subscribe(seo => {
      this.seoService.updateMetaTags(seo);
      this.cdr.markForCheck();
    });
  }

}
