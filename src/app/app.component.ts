import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {ToggleHeaderService} from '../core/services/Helpers/toggle.header.service';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {LocalStorage} from '../core/services/localStorage';
import {LanguageService} from '../core/services/language-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService, private toggleHeader: ToggleHeaderService,
              private translate: TranslateService,
              private localStorage: LocalStorage,
              private langservice: LanguageService,) {
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
    this.getLanguage();
    this.langservice.loadStyle();
    this.subscribeHeader();
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 3000);
  }

  subscribeHeader() {
    this.toggleHeader.currentHeader.subscribe(data => {
      this.isHome = data;
    })
  }

  getLanguage() {
    if (this.localStorage.getLang() === 'ar') {
      this.translate.setDefaultLang('ar');
      this.translate.use('ar');
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
