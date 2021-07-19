import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {YachtService} from '../../../core/services/yacht.service';
import {Yacht} from "../../../Models/yacht";
import {YachtBookingFormComponent} from "../../../shared/yacht-booking-form/yacht-booking-form.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MetaTagService} from "../../../core/services/Helpers/meta-tag.service";

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

  constructor(config: NgbCarouselConfig,
              private route: ActivatedRoute,
              private yachtServie: YachtService,
              private metaService: MetaTagService,
              public dialog: MatDialog,
              private cdr: ChangeDetectorRef) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.getYacht();
    this.getYachts();
  }

  getYacht() {
    this.yachtServie.getYacht(this.slug).subscribe(data => {
      this.yacht = data;
      this.updateMetaTags();
      this.cdr.markForCheck();
    });
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

  private updateMetaTags() {
    window.dataLayer = [];
    let first_image = this.yacht?.images?.length ?  this.yacht?.images[0].image : '';
    // @ts-ignore
    this.metaService.updateTags(this.yacht?.seo?.title + ' | Boats-Ride', this.yacht?.seo?.description, first_image);
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      'event': 'details',
      'ecommerce': {
        'currencyCode': 'AED',
        'detail': {
          'products': [{
            name: this.yacht.name ? this.yacht.name : '',
            id: this.yacht.id ? this.yacht.id : '',
            price: this.yacht.selling_per_hour ? this.yacht.selling_per_hour : '',
          }]
        }
      }
    });
  }

}
