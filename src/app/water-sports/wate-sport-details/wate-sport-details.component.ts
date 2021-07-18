import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WaterSportService} from '../../../core/services/water-sport.service';

@Component({
  selector: 'app-wate-sport-details',
  templateUrl: './wate-sport-details.component.html',
  styleUrls: ['./wate-sport-details.component.css']
})
export class WateSportDetailsComponent implements OnInit {
  slug: any;
  watersport: any;

  constructor(private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private WaterSportSevice: WaterSportService) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.getWaterSport();
  }

  getWaterSport() {
    this.WaterSportSevice.getWaterSport(this.slug).subscribe(data => {
     this.watersport = data;
      this.cdr.markForCheck();
    })
  }
}
