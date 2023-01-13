import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LanguagesUrlService {

  private langSource = new BehaviorSubject('en');
  currentLang = this.langSource.asObservable();

  constructor() { }

  changeLang(lang: string) {
    this.langSource.next(lang)
  }
}
