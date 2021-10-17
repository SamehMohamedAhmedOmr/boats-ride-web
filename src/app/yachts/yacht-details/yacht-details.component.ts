import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {YachtService} from '../../../core/services/yacht.service';
import {Yacht} from "../../../Models/yacht";
import {YachtBookingFormComponent} from "../../../shared/yacht-booking-form/yacht-booking-form.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MetaTagService} from "../../../core/services/Helpers/meta-tag.service";
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from "@kolkov/ngx-gallery";
import {LocalStorageService} from "../../../core/services/localStorage.service";

declare global {
  interface Window { dataLayer: any[]; }
}

@Component({
  selector: 'app-yacht-details',
  templateUrl: './yacht-details.component.html',
  styleUrls: ['./yacht-details.component.css']
})
export class YachtDetailsComponent implements OnInit {
  slug: any;
  // @ts-ignore
  yacht: Yacht;
  yachts_list!:Yacht[];
  showNavigationArrows = true;
  showNavigationIndicators = false;
  lang:string | null = 'en';

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  constructor(private route: ActivatedRoute,
              private yachtServie: YachtService,
              private metaService: MetaTagService,
              public dialog: MatDialog,
              private localStorageService: LocalStorageService,
              private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    let config = new NgbCarouselConfig();
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.lang = this.localStorageService.getItem('lang');
    this.slug = this.route.snapshot.params['slug'];
    this.getYacht();
    this.getYachts();
  }

  getYacht() {
    this.yachtServie.getYacht(this.slug).subscribe(data => {
      this.yacht = data;
      this.prepareImages();
      this.updateMetaTags(data);
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

    this.yacht.images.forEach(image_object => {
      this.galleryImages.push({
        small: image_object.thumbnail,
        medium: image_object.image,
        big: image_object.image,
      })
    });

    this.cdr.markForCheck();
  }

  getYachts() {
    this.yachtServie.getYachts().subscribe(data => {
      this.yachts_list = data;
      this.cdr.markForCheck();
    });
  }

  openBooking() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'full-screen-modal';
    dialogConfig.width  = '100vw';
    dialogConfig.data = {
      yachts: this.yachts_list
    };

    this.dialog.open(YachtBookingFormComponent, dialogConfig);
  }

  private updateMetaTags(yacht:Yacht) {
    window.dataLayer = [];
    let first_image = yacht?.images?.length ?  yacht?.images[0].image : '';
    // @ts-ignore
    this.metaService.updateTags(yacht?.seo?.title, yacht?.seo?.description, first_image);
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      'event': 'details',
      'ecommerce': {
        'currencyCode': 'AED',
        'detail': {
          'products': [{
            name: yacht.name ? yacht.name : '',
            id: yacht.id ? yacht.id : '',
            price: yacht.selling_per_hour ? yacht.selling_per_hour : '',
          }]
        }
      }
    });
  }

}
