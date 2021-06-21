import {Component, HostListener, OnInit} from '@angular/core';
import {ResizeServiceService} from '../../core/services/Helpers/resize-service.service';

@Component({
  selector: 'app-main-about',
  templateUrl: './main-about.component.html',
  styleUrls: ['./main-about.component.css']
})
export class MainAboutComponent implements OnInit {

  constructor(private resizeServiceService: ResizeServiceService) {
  }

  numberofcells = 2;

  ngOnInit(): void {
    this.numberofcells = this.resizeServiceService.checkWindowSize();
  }


  @HostListener('window:resize', ['$event'])

  // tslint:disable-next-line:typedef
  onResize(event: { target: { innerWidth: any; }; }) {
    this.numberofcells = this.resizeServiceService.checkWindowSize();
  }

}
