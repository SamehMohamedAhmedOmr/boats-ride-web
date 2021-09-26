import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ServicesService} from '../../../core/services/services.service';
import {Services} from '../../../Models/services';
import {SeoService} from "../../../core/services/seo.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public Services: Services [] = [];
  is_loading:boolean = true;

  constructor(private services: ServicesService,
              private seoService:SeoService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getSeo();
    this.getServices();
  }

  getServices() {
    this.services.getSevices().subscribe(data => {
      this.Services = data;
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }

  getSeo(){
    this.seoService.Seo('services').subscribe(seo => {
      this.seoService.updateMetaTags(seo);
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }

}
