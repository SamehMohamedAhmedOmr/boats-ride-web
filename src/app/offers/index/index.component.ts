import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Offer} from '../../../Models/offer';
import {OffersService} from '../../../core/services/offers.service';
import {SeoService} from "../../../core/services/seo.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public offers: Offer [] = [];
  is_loading:boolean = true;

  constructor(private offerService: OffersService,
              private seoService:SeoService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getSeo();
    this.getOffers();
  }

  getOffers() {
    this.offerService.getOffers().subscribe(data => {
      this.offers = data;
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }

  getSeo(){
    this.seoService.Seo('offers').subscribe(seo => {
      this.seoService.updateMetaTags(seo);
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }

}
