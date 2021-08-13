import {Component, HostListener, OnInit} from '@angular/core';
import {ResizeServiceService} from "../../../core/services/Helpers/resize-service.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-new-popular-destination',
  templateUrl: './new-popular-destination.component.html',
  styleUrls: ['./new-popular-destination.component.css']
})
export class NewPopularDestinationComponent implements OnInit {

  is_loading: boolean = true;

  destinations:{
    name: string,
    image: string,
    rate: number,
    reviews: number,
  }[] = [];

  constructor(private resizeServiceService: ResizeServiceService, private translateService:TranslateService) {
  }

  numberofcells = 3;

  ngOnInit(): void {
    this.prepareDestinations();
    this.numberofcells = this.resizeServiceService.checkWindowSize();
  }


  prepareDestinations(){
    this.destinations.push(this.prepareSingleDestination(this.translateService.instant('t37'),
      './assets/images/resource/23.jpg', 4.5,256));

    this.destinations.push(this.prepareSingleDestination(this.translateService.instant('t38'),
      './assets/images/resource/22.jpg', 4.5,251));

    this.destinations.push(this.prepareSingleDestination(this.translateService.instant('ATLANTIS_THE_PALM'),
      './assets/images/resource/24.jpg', 4.8,198));

    this.destinations.push(this.prepareSingleDestination(this.translateService.instant('t40'),
      './assets/images/resource/25.jpg', 4.5,256));

    this.destinations.push(this.prepareSingleDestination(this.translateService.instant('t42'),
      './assets/images/resource/10.jpg', 4.5,227));

    this.destinations.push(this.prepareSingleDestination(this.translateService.instant('MARINA_SKYLINE'),
      './assets/images/resource/70.jpg', 4.5,254));

    this.destinations.push(this.prepareSingleDestination(this.translateService.instant('AIN_WHEEL'),
      './assets/images/resource/99.jpg', 4.5,254));

    this.destinations.push(this.prepareSingleDestination(this.translateService.instant('t37'),
      './assets/images/resource/101.jpg', 4.5,254));

    this.destinations.push(this.prepareSingleDestination(this.translateService.instant('HARBOUR'),
      './assets/images/resource/102.jpg', 4.5,254));
  }

  prepareSingleDestination(name:string, image:string, rate:number, reviews:number){
    return {
      name : name,
      image: image,
      rate: rate,
      reviews: reviews,
    }
  }


  @HostListener('window:resize', ['$event'])
  // tslint:disable-next-line:typedef
  onResize(event: { target: { innerWidth: any; }; }) {
    this.numberofcells = this.resizeServiceService.checkWindowSize();
  }



}
