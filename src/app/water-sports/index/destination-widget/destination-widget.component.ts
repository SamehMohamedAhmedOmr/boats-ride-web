import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-destination-widget',
  templateUrl: './destination-widget.component.html',
  styleUrls: ['./destination-widget.component.css']
})
export class DestinationWidgetComponent implements OnInit {

  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
  }

}
