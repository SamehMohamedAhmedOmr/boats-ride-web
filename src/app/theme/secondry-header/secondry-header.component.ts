import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LanguageService} from '../../../core/services/language-services.service';
import {LanguagesUrlService} from "../../../core/services/Helpers/languages.url.service";
import {LocalStorageService} from "../../../core/services/localStorage.service";

@Component({
  selector: 'app-secondry-header',
  templateUrl: './secondry-header.component.html',
  styleUrls: ['./secondry-header.component.css']
})
export class SecondryHeaderComponent implements OnInit {
  @Input() public drawer: any;
  lang:string | null = 'en';
  constructor(private router: Router,
              private languagesUrlService:LanguagesUrlService,
              private localStorageService: LocalStorageService,
              private langservice: LanguageService) {
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
        let host = document.location.host;
        let host_ar = 'ar.' + host;
        base_url = base_url.replace(host, host_ar);
      }
      else{
        base_url = base_url.replace('ar.', '');
      }
      base_url += path_name;
      window.location.href = base_url;
    }
  }


}
