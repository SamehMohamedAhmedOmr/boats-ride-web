import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Offer} from '../../../Models/offer';
import {OffersService} from '../../../core/services/offers.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public offers: Offer [] = [];
  is_loading:boolean = true;

  constructor(private offerService: OffersService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this.offerService.getOffers().subscribe(data => {
      this.offers = data;
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }

}
