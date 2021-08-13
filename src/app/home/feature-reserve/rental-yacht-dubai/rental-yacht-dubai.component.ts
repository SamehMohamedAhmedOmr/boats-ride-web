import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {ResizeServiceService} from "../../../../core/services/Helpers/resize-service.service";
import {ServicesService} from "../../../../core/services/services.service";
import {Services} from "../../../../Models/services";

@Component({
  selector: 'app-rental-yacht-dubai',
  templateUrl: './rental-yacht-dubai.component.html',
  styleUrls: ['./rental-yacht-dubai.component.css']
})
export class RentalYachtDubaiComponent implements OnInit {

  is_loading: boolean = true;

  constructor(private resizeServiceService: ResizeServiceService,
              private services: ServicesService,
              private cdr: ChangeDetectorRef) {
  }

  public Services: Services [] = [];
  numberofcells = 4;

  ngOnInit(): void {
    this.numberofcells = this.resizeServiceService.checkWindowSize(4);
    this.getServices();
  }


  @HostListener('window:resize', ['$event'])
  // tslint:disable-next-line:typedef
  onResize(event: { target: { innerWidth: any; }; }) {
    this.numberofcells = this.resizeServiceService.checkWindowSize(4);
  }

  getServices() {
    this.services.getSevices().subscribe(data => {
      this.Services = data;
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }

}
