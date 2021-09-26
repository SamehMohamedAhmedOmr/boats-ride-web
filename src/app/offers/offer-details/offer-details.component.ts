import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OffersService} from '../../../core/services/offers.service';
import {Offer} from '../../../Models/offer';
import {MetaTagService} from "../../../core/services/Helpers/meta-tag.service";

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  slug: any;
  offer!: Offer;

  constructor(private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private metaService: MetaTagService,
              private offerservice: OffersService) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.getOffer();
  }

  getOffer() {
    this.offerservice.getOffer(this.slug).subscribe(data => {
      this.offer = data;
      this.updateMetaTags();
      this.cdr.markForCheck();
    })
  }


  private updateMetaTags() {
    window.dataLayer = [];
    // @ts-ignore
    this.metaService.updateTags(this.offer?.seo?.title, this.offer?.seo?.description, this.offer?.image);
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      'event': 'details',
      'ecommerce': {
        'currencyCode': 'AED',
        'detail': {
          'products': [{
            name: this.offer.title ? this.offer.title : '',
            id: this.offer.id ? this.offer.id : '',
          }]
        }
      }
    });
  }
}
