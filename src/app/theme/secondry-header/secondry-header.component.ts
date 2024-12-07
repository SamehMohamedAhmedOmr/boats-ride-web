import {Component, Input, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import {LanguageService} from '../../../core/services/language-services.service';
import {LanguagesUrlService} from "../../../core/services/Helpers/languages.url.service";
import {LocalStorageService} from "../../../core/services/localStorage.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-secondry-header',
  templateUrl: './secondry-header.component.html',
  styleUrls: ['./secondry-header.component.css']
})
export class SecondryHeaderComponent implements OnInit {
  @Input() public drawer: any;
  lang:string | null = 'en';
  isBrowser: boolean = false;

  constructor(private router: Router,
              private languagesUrlService:LanguagesUrlService,
              private localStorageService: LocalStorageService,
              @Inject(PLATFORM_ID) private platformId: any,
              private langservice: LanguageService) {
                this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.lang = this.localStorageService.getItem('lang');
  }

  switchLanguage(lang: string) {
    let base_url = document.location.origin;
    let path_name = document.location.pathname;
    if (base_url.includes(lang)){
      this.localStorageService.setItem('lang', lang);
      this.languagesUrlService.changeLang(lang);
      this.router
        .navigateByUrl(this.router.url, {skipLocationChange: true})
        .then();
      document.location.reload();
      this.langservice.loadStyle();
    } else{
      if (lang == 'ar'){
        base_url = 'https://ar.boatsride.com';
      }
      else{
        base_url = base_url.replace('ar.', '');
      }
      base_url += path_name;
      window.location.href = base_url;
    }
  }


}
