import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LanguageService} from '../../core/services/language-services.service';
import {LanguagesUrlService} from "../../core/services/Helpers/languages.url.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public drawer: any;
  @Input() public drawermobile: any;
  constructor( private router: Router,
               private languagesUrlService:LanguagesUrlService,
               private langservice: LanguageService) { }

  ngOnInit(): void {
  }
  switchLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.languagesUrlService.changeLang(lang);
    this.router
      .navigateByUrl(this.router.url, {skipLocationChange: true})
      .then();
    document.location.reload();
    this.langservice.loadStyle();
  }
}
