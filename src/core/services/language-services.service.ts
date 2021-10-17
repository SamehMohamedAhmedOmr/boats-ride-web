import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {TranslationService} from './translation.service';
import {LocalStorageService} from "./localStorage.service";


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(@Inject(DOCUMENT) private document: Document,
              private localStorageService: LocalStorageService,
              private translationService: TranslationService) {
  }
  loadStyle() {
    const lang = this.localStorageService.getItem('lang');
    let styleName = '';
    // tslint:disable-next-line:triple-equals
    if (lang == 'ar') {
      this.document.dir = 'rtl';
      this.document.documentElement.lang = 'ar';
      this.document.documentElement.style.direction = 'rtl';
      styleName = 'assets/styles/rtl.css';
      this.translationService.setLanguage('ar');
    } else {
      this.document.dir = 'ltr';
      this.document.documentElement.lang = 'en';
      this.document.documentElement.style.direction = 'ltr';
      styleName = 'assets/styles/ltr.css';
      this.translationService.setLanguage('en');
    }
    const head = this.document.getElementsByTagName('head')[0];

    const themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;
      head.appendChild(style);
    }
  }
}
