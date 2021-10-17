import { Injectable } from '@angular/core';
// Tranlsation
import { TranslateService } from '@ngx-translate/core';
import {LocalStorageService} from "./localStorage.service";
//import { locale as enLang } from './../../../assets/i18n/en.json';
//import { locale as arLang } from './../../../assets/i18n/ar.json';
export interface Locale {
  lang: string;
  // tslint:disable-next-line:ban-types
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  // Private properties
  private langIds: any = [];

  /**
   * Service Constructor
   *
   * @param translate: TranslateService
   * @param localStorageService
   */
  constructor(private translate: TranslateService,
              private localStorageService: LocalStorageService) {
    // add new langIds to the list
    //this.loadTranslations(enLang , arLang);
    this.translate.setDefaultLang('en');
  }

  /**
   * Load Translation
   *
   * @param args: Locale[]
   */
  loadTranslations(...args: Locale[]): void {
    const locales = [...args];

    locales.forEach(locale => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation(locale.lang, locale.data, true);

      this.langIds.push(locale.lang);
    });

    // add new languages to the list
    this.translate.addLangs(this.langIds);
    this.translate.use('ar');
  }

  /**
   * Setup language
   *
   * @param lang: any
   */
  setLanguage(lang: string) {
    if (lang) {
      this.translate.use(this.translate.getDefaultLang());
      this.translate.use(lang);
      this.localStorageService.setItem('lang', lang);
    }
  }

  /**
   * Returns selected language
   */
  getSelectedLanguage(): any {
    return this.localStorageService.getItem('lang') || this.translate.getDefaultLang();
  }
}
