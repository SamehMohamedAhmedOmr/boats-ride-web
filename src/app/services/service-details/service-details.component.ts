import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServicesService} from '../../../core/services/services.service';
import {Services} from "../../../Models/services";
import {MetaTagService} from "../../../core/services/Helpers/meta-tag.service";
import {isPlatformBrowser} from "@angular/common";

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
  isBrowser: boolean = false;

  constructor(private route: ActivatedRoute,
              private services: ServicesService,
              @Inject(PLATFORM_ID) private platformId: any,
              private metaService: MetaTagService,
              private cdr: ChangeDetectorRef) {
    this.isBrowser = isPlatformBrowser(platformId);
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
    this.metaService.updateTags(this.service?.seo?.title , this.service?.seo?.description, this.service?.image);
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
