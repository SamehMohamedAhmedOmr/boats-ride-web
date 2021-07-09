import { Component, OnInit } from '@angular/core';
import {OffersService} from '../../core/services/offers.service';
import {Offer} from '../../Models/offer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  public offers : Offer [] = [];
  constructor(private offerService:OffersService) { }

  ngOnInit(): void {
    this.getOffers();
  }
getOffers(){
    this.offerService.getOffers().subscribe(data=>{
      this.offers = data;
      console.log(this.offers);
    })
}
}
