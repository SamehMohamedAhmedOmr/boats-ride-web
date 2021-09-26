import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {WaterSport} from '../../../Models/water-sport';
import {WaterSportService} from '../../../core/services/water-sport.service';
import {SeoService} from "../../../core/services/seo.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public waterSports: WaterSport [] = [];
  is_loading:boolean = true;

  constructor(private waterService: WaterSportService,
              private seoService:SeoService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getSeo();
    this.getWaterSports();
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
