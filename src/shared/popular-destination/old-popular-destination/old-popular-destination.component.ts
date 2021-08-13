import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {ResizeServiceService} from "../../../core/services/Helpers/resize-service.service";
import {ServicesService} from "../../../core/services/services.service";
import {Services} from "../../../Models/services";

@Component({
  selector: 'app-old-popular-destination',
  templateUrl: './old-popular-destination.component.html',
  styleUrls: ['./old-popular-destination.component.css']
})
export class OldPopularDestinationComponent implements OnInit {

  is_loading: boolean = true;

  constructor(private resizeServiceService: ResizeServiceService,
              private services: ServicesService,
              private cdr: ChangeDetectorRef) {
  }

  public Services: Services [] = [];
  numberofcells = 3;

  ngOnInit(): void {
    this.numberofcells = this.resizeServiceService.checkWindowSize();
    this.getServices();
  }


  @HostListener('window:resize', ['$event'])
  // tslint:disable-next-line:typedef
  onResize(event: { target: { innerWidth: any; }; }) {
    this.numberofcells = this.resizeServiceService.checkWindowSize();
  }

  getServices() {
    this.services.getSevices().subscribe(data => {
      this.Services = data;
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }

}
