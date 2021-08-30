import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WaterSportService} from '../../../core/services/water-sport.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {WaterSport} from "../../../Models/water-sport";
import {WaterSportBookingFormComponent} from "../../../shared/water-sport-booking-form/water-sport-booking-form.component";
import {MetaTagService} from "../../../core/services/Helpers/meta-tag.service";
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from "@kolkov/ngx-gallery";

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
  // @ts-ignore
  water_sport: WaterSport = null;
  water_sports_list!:WaterSport[];

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

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
      this.water_sport = data;
      this.prepareImages();
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

  prepareImages(){
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 6,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 5
      },
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.water_sport.images.forEach(image_object => {
      this.galleryImages.push({
        small: image_object.thumbnail,
        medium: image_object.image,
        big: image_object.image,
      })
    });

    this.cdr.markForCheck();
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
    let first_image = this.water_sport?.images?.length ?  this.water_sport?.images[0].image : '';
    // @ts-ignore
    this.metaService.updateTags(this.water_sport?.seo?.title + ' | Boats-Ride', this.water_sport?.seo?.description, first_image);
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      'event': 'details',
      'ecommerce': {
        'currencyCode': 'AED',
        'detail': {
          'products': [{
            name: this.water_sport.name ? this.water_sport.name : '',
            id: this.water_sport.id ? this.water_sport.id : '',
            price: this.water_sport.selling_per_hour ? this.water_sport.selling_per_hour : '',
          }]
        }
      }
    });
  }

}
