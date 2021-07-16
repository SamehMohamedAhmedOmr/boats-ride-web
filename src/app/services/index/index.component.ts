import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ServicesService} from '../../../core/services/services.service';
import {Services} from '../../../Models/services';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public Services: Services [] = [];

  constructor(private services: ServicesService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.services.getSevices().subscribe(data => {
      this.Services = data;
      this.cdr.markForCheck();
    });
  }


}
