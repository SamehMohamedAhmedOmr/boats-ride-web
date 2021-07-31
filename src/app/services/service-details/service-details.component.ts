import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServicesService} from '../../../core/services/services.service';
import {Services} from "../../../Models/services";
import {MetaTagService} from "../../../core/services/Helpers/meta-tag.service";

declare global {
  interface Window { dataLayer: any[]; }
}

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  slug: any;
  service!: Services;

  constructor(private route: ActivatedRoute,
              private services: ServicesService,
              private metaService: MetaTagService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.getService();
  }

  getService() {
    this.services.getService(this.slug).subscribe(data => {
      this.service = data;
      this.updateMetaTags();
      this.cdr.markForCheck();
    });
  }

  private updateMetaTags() {
    window.dataLayer = [];
    // @ts-ignore
    this.metaService.updateTags(this.service?.seo?.title + ' | Boats-Ride', this.service?.seo?.description, this.service?.image);
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      'event': 'details',
      'ecommerce': {
        'currencyCode': 'AED',
        'detail': {
          'products': [{
            name: this.service.name ? this.service.name : '',
            id: this.service.id ? this.service.id : '',
            price: this.service.price ? this.service.price : '',
          }]
        }
      }
    });
  }

}
