import {ChangeDetectorRef, Component, OnDestroy, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {ToggleHeaderService} from '../../core/services/Helpers/toggle.header.service';
import {SeoService} from "../../core/services/seo.service";
import {isPlatformBrowser} from "@angular/common";
import {SettingsService} from "../../core/services/settings.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{

  isBrowser: boolean = false;

  settings: any;

  constructor(private toggleHeader:ToggleHeaderService,
              private seoService: SeoService,
              @Inject(PLATFORM_ID) private platformId: any,
              private settingsService: SettingsService,
              private cdr: ChangeDetectorRef) {
        this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.getSeo();
    this.toggleHeader.changeHeader(true);
    this.settings = this.settingsService.getSettings();
    console.log(this.settings);
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
