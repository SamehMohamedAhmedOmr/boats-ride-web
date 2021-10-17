import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ResizeServiceService} from '../../../core/services/Helpers/resize-service.service';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-testmoinails',
  templateUrl: './testmoinails.component.html',
  styleUrls: ['./testmoinails.component.css']
})
export class TestmoinailsComponent implements OnInit {

  isBrowser: boolean = false;
  constructor(private resizeServiceService: ResizeServiceService, @Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  numberofcells = 2;

  ngOnInit(): void {
    const size = window.innerWidth;
    if (size <= 991.98) {
      this.numberofcells = 1;
    }
  }


  @HostListener('window:resize', ['$event'])

  // tslint:disable-next-line:typedef
  onResize(event: { target: { innerWidth: any; }; }) {
    this.numberofcells = this.resizeServiceService.checkWindowSize();
  }

}
