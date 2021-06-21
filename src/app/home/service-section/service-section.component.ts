import {Component, HostListener, OnInit} from '@angular/core';
import {ResizeServiceService} from '../../../core/services/Helpers/resize-service.service';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit {

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
