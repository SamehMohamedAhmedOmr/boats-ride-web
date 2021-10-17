import {ChangeDetectorRef, Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ResizeServiceService} from '../../core/services/Helpers/resize-service.service';
import {WaterSport} from '../../Models/water-sport';
import {WaterSportService} from '../../core/services/water-sport.service';
import {LocalStorageService} from "../../core/services/localStorage.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit {

  is_loading:boolean = true;
  lang:string | null = 'en';
  isBrowser: boolean = false;

  constructor(private resizeServiceService: ResizeServiceService,
              private waterService: WaterSportService,
              @Inject(PLATFORM_ID) private platformId: any,
              private localStorageService: LocalStorageService,
              private cdr: ChangeDetectorRef) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  public waterSports: WaterSport [] = [];
  numberofcells = 3;

  ngOnInit(): void {
    this.lang = this.localStorageService.getItem('lang');
    this.numberofcells = this.resizeServiceService.checkWindowSize();
    this.getWaterSports();
  }


  @HostListener('window:resize', ['$event'])

  // tslint:disable-next-line:typedef
  onResize(event: { target: { innerWidth: any; }; }) {
    this.numberofcells = this.resizeServiceService.checkWindowSize();
  }

  getWaterSports() {
    this.waterService.getWaterSports().subscribe(data => {
      this.waterSports = data;
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }
}
