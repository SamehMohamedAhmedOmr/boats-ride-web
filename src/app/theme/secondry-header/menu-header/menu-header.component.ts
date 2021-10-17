import {Component, Input, OnInit} from '@angular/core';
import {LocalStorageService} from "../../../../core/services/localStorage.service";

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  @Input() public drawer: any;
  lang:string | null = 'en';
  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.lang = this.localStorageService.getItem('lang');
  }

  toggleNavOnClick() {
    let element: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    if (element.getAttribute('aria-expanded') == 'true') {
      element.click();
      document.body.click();
    }
  }
}
