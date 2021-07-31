import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LanguageService} from '../../../core/services/language-services.service';

@Component({
  selector: 'app-secondry-header',
  templateUrl: './secondry-header.component.html',
  styleUrls: ['./secondry-header.component.css']
})
export class SecondryHeaderComponent implements OnInit {
  @Input() public drawer: any;
  lang:any;
  constructor(private router: Router,
              private langservice: LanguageService) {
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang');
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
