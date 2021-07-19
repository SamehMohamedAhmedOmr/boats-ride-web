import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {YachtService} from '../../../core/services/yacht.service';
import {Yacht} from "../../../Models/yacht";
import {YachtBookingFormComponent} from "../../../shared/yacht-booking-form/yacht-booking-form.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

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
}
