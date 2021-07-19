import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {YachtService} from '../../../core/services/yacht.service';
import {Yacht} from "../../../Models/yacht";
import {YachtBookingFormComponent} from "../../../shared/yacht-booking-form/yacht-booking-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-yacht-details',
  templateUrl: './yacht-details.component.html',
  styleUrls: ['./yacht-details.component.css']
})
export class YachtDetailsComponent implements OnInit {
  slug: any;
  // @ts-ignore
  yacht: Yacht;
  showNavigationArrows = true;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig,
              private route: ActivatedRoute,
              private yachtServie: YachtService,
              public dialog: MatDialog,
              private cdr: ChangeDetectorRef) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.getYacht();
  }

  getYacht() {
    this.yachtServie.getYacht(this.slug).subscribe(data => {
      this.yacht = data;
      this.cdr.markForCheck();
    });
  }

  openBooking() {
    this.dialog.open(YachtBookingFormComponent, {
      width: '40rem',
      data: [],
    });
  }
}
