import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WaterSportService} from '../../../core/services/water-sport.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {WaterSport} from "../../../Models/water-sport";
import {WaterSportBookingFormComponent} from "../../../shared/water-sport-booking-form/water-sport-booking-form.component";
import {MetaTagService} from "../../../core/services/Helpers/meta-tag.service";

declare global {
  interface Window { dataLayer: any[]; }
}

@Component({
  selector: 'app-wate-sport-details',
  templateUrl: './wate-sport-details.component.html',
  styleUrls: ['./wate-sport-details.component.css']
})
export class WateSportDetailsComponent implements OnInit {
  slug: any;
  watersport: any;
  water_sports_list!:WaterSport[];

  constructor(private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private metaService: MetaTagService,
              public dialog: MatDialog,
              private WaterSportSevice: WaterSportService) {
  }

  ngOnInit(): void {
    window.dataLayer = [];
    this.slug = this.route.snapshot.params['slug'];
    this.getWaterSport();
    this.getWaterSports();
  }

  getWaterSport() {
    this.WaterSportSevice.getWaterSport(this.slug).subscribe(data => {
      this.watersport = data;
      this.updateMetaTags();
      this.cdr.markForCheck();
    })
  }

  getWaterSports() {
    this.WaterSportSevice.getWaterSports().subscribe(data => {
      this.water_sports_list = data;
      this.cdr.markForCheck();
    });
  }

  openBooking() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'full-screen-modal';
    dialogConfig.width  = '100vw';
    dialogConfig.data = {
      water_sports: this.water_sports_list
    };

    this.dialog.open(WaterSportBookingFormComponent, dialogConfig);
  }

  private updateMetaTags() {
    window.dataLayer = [];
    let first_image = this.watersport?.images?.length ?  this.watersport?.images[0].image : '';
    // @ts-ignore
    this.metaService.updateTags(this.watersport?.seo?.title + ' | Boats-Ride', this.watersport?.seo?.description, first_image);
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      'event': 'details',
      'ecommerce': {
        'currencyCode': 'AED',
        'detail': {
          'products': [{
            name: this.watersport.name ? this.watersport.name : '',
            id: this.watersport.id ? this.watersport.id : '',
            price: this.watersport.selling_per_hour ? this.watersport.selling_per_hour : '',
          }]
        }
      }
    });
  }

}
