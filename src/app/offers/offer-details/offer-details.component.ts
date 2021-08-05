import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OffersService} from '../../../core/services/offers.service';
import {Offer} from '../../../Models/offer';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  slug: any;
  offer!:Offer;
  constructor(private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private offerservice:OffersService) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.getOffer();
  }
  getOffer(){
  this.offerservice.getOffer(this.slug).subscribe(data =>{
    this.offer = data;
    this.cdr.markForCheck();
  })
  }
}
