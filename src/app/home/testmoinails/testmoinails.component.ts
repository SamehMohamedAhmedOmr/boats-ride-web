import {Component, HostListener, OnInit} from '@angular/core';
import {ResizeServiceService} from '../../../core/services/Helpers/resize-service.service';

@Component({
  selector: 'app-testmoinails',
  templateUrl: './testmoinails.component.html',
  styleUrls: ['./testmoinails.component.css']
})
export class TestmoinailsComponent implements OnInit {

  constructor(private resizeServiceService: ResizeServiceService) {
  }

  numberofcells = 2;

  ngOnInit(): void {
    const size = window.innerWidth;
    if (size <= 991.98) {
      this.numberofcells = 1;
    }
  }


  @HostListener('window:resize', ['$event'])

  // tslint:disable-next-line:typedef
  onResize(event: { target: { innerWidth: any; }; }) {
    this.numberofcells = this.resizeServiceService.checkWindowSize();
  }

}
