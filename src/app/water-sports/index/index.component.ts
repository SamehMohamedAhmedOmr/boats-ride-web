import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {WaterSport} from '../../../Models/water-sport';
import {WaterSportService} from '../../../core/services/water-sport.service';
import {SeoService} from "../../../core/services/seo.service";
import {LocalStorageService} from "../../../core/services/localStorage.service";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public waterSports: WaterSport [] = [];
  is_loading:boolean = true;
  lang:string | null = 'en';
  constructor(private waterService: WaterSportService,
              private seoService:SeoService,
              private localStorageService: LocalStorageService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getSeo();
    this.getWaterSports();
    this.lang = this.localStorageService.getItem('lang');
  }

  getWaterSports() {
    this.waterService.getWaterSports().subscribe(data => {
      this.waterSports = data;
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }

  getSeo(){
    this.seoService.Seo('water-sports').subscribe(seo => {
      this.seoService.updateMetaTags(seo);
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }

}
