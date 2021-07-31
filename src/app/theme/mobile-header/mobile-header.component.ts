import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LanguageService} from '../../../core/services/language-services.service';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {

  constructor(private router: Router,
              private langservice: LanguageService) { }

  ngOnInit(): void {
  }
  switchLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.router
      .navigateByUrl(this.router.url, {skipLocationChange: true})
      .then();
    document.location.reload();
    this.langservice.loadStyle();
  }
}
