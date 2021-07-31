import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  @Input() public drawer: any;
  lang: any;
  constructor() {
    this.lang = localStorage.getItem('lang');
  }

  ngOnInit(): void {
  }

  toggleNavOnClick() {
    let element: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    if (element.getAttribute('aria-expanded') == 'true') {
      element.click();
      document.body.click();
    }
  }
}
