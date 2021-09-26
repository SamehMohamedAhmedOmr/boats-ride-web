import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ToggleHeaderService} from '../../core/services/Helpers/toggle.header.service';
import {SeoService} from "../../core/services/seo.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{

  constructor(private toggleHeader:ToggleHeaderService,
              private seoService: SeoService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getSeo();
    this.toggleHeader.changeHeader(true);
  }

  ngOnDestroy(): void {
    this.toggleHeader.changeHeader(false);
  }

  getSeo() {
    this.seoService.Seo('home').subscribe(seo => {
      this.seoService.updateMetaTags(seo);
      this.cdr.markForCheck();
    });
  }

}
