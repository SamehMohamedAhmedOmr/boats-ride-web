import {Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {Services} from "../../../../../Models/services";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-service-slider',
  templateUrl: './service-slider.component.html',
  styleUrls: ['./service-slider.component.css']
})
export class ServiceSliderComponent implements OnInit {

  @Input() Services: Services [] = [];
  @Input() numberOfCell: number = 4;
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
  }

}
