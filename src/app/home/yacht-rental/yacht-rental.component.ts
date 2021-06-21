import {Component, HostListener, OnInit} from '@angular/core';
import {ResizeServiceService} from '../../../core/services/Helpers/resize-service.service';

@Component({
  selector: 'app-yacht-rental',
  templateUrl: './yacht-rental.component.html',
  styleUrls: ['./yacht-rental.component.css']
})
export class YachtRentalComponent implements OnInit {

  constructor(private resizeServiceService: ResizeServiceService) {
  }

  numberofcells = 3;

  ngOnInit(): void {
    this.numberofcells = this.resizeServiceService.checkWindowSize();
  }


  @HostListener('window:resize', ['$event'])

  // tslint:disable-next-line:typedef
  onResize(event: { target: { innerWidth: any; }; }) {
    this.numberofcells = this.resizeServiceService.checkWindowSize();
  }
}
