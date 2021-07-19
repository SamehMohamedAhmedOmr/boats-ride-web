import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WaterSportService} from '../../../core/services/water-sport.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {WaterSport} from "../../../Models/water-sport";
import {WaterSportBookingFormComponent} from "../../../shared/water-sport-booking-form/water-sport-booking-form.component";

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
              public dialog: MatDialog,
              private WaterSportSevice: WaterSportService) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.getWaterSport();
    this.getWaterSports();
  }

  getWaterSport() {
    this.WaterSportSevice.getWaterSport(this.slug).subscribe(data => {
      this.watersport = data;
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
}
