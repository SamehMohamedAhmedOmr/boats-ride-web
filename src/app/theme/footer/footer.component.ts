import {Component, HostListener, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css','./footer.scss']
})
export class FooterComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  isShow: boolean | undefined;
  topPosToStartShowing = 100;
  lang = localStorage.getItem('lang');
  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit(): void {
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
