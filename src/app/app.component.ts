import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {ToggleHeaderService} from '../core/services/Helpers/toggle.header.service';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../core/services/language-services.service';
import {SettingsService} from "../core/services/settings.service";
import {Settings} from "../Models/settings";
import {LanguagesUrlService} from "../core/services/Helpers/languages.url.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {isPlatformBrowser} from "@angular/common";
import {LocalStorageService} from "../core/services/localStorage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // @ts-ignore
  settings: Settings;
  static isBrowser = new BehaviorSubject<boolean>(false);

  constructor(private ngxService: NgxUiLoaderService,
              private toggleHeader: ToggleHeaderService,
              private settingsService: SettingsService,
              private translate: TranslateService,
              private languagesUrlService: LanguagesUrlService,
              private router: Router,
              private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              @Inject(PLATFORM_ID) private platformId: any,
              private localStorageService: LocalStorageService,
              private langservice: LanguageService) {

    AppComponent.isBrowser.next(isPlatformBrowser(platformId));

    this.translate.setDefaultLang('en');
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang === 'ar') {
        document.dir = 'rtl';
        // @ts-ignore
        document.querySelector('body').setAttribute('style', 'text-align:right');
      } else {
        document.dir = 'ltr';
        // @ts-ignore
        document.querySelector('body').setAttribute('style', 'text-align:left');
      }
    });

  }

  title = 'Boats Ride - Yacht Rental Dubai Marina | Yacht Charter Dubai | Boats Rental Dubai Marina | www.boatsride.com';

  isHome: boolean = false;

  ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    this.settingSubscribe();
    this.getLanguage();
    this.subscribeLanguages();
    this.langservice.loadStyle();
    this.subscribeHeader();
  }

  subscribeHeader() {
    this.toggleHeader.currentHeader.subscribe(data => {
      this.isHome = data;
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    });
  }

  getLanguage() {
    let base_url = document.location.origin;

    if (base_url.includes('ar')) {
      this.translate.setDefaultLang('ar');
      this.translate.use('ar');
      this.languagesUrlService.changeLang('ar');
      this.localStorageService.setItem('lang', 'ar');
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
      this.languagesUrlService.changeLang('en');
      this.localStorageService.setItem('lang', 'en');
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  settingSubscribe() {
    this.settingsService.get().subscribe(value => {
      this.settings = value;
      this.settingsService.setSettings(value);
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
      this.cdr.markForCheck();
    });
  }

  private subscribeLanguages() {
    this.route.queryParams
      .subscribe(params => {
        let lang = params.lang;
        if (lang) {
          if (lang == 'ar') {
            this.localStorageService.setItem('lang', lang);
            this.getLanguage();
            this.langservice.loadStyle();
          }
        }
      });
  }

}
