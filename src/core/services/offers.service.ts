import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Offer} from '../../Models/offer';
@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private Url = environment.url();
  constructor(
    private http: HttpClient,
  ) {
  }

  getOffers() :Observable<Offer[]>{
    console.log(this.Url);
    return this.http.get<Offer[]>(this.Url+'offers').pipe(map((data: any) => data.body as Offer[]));;
  }
  getOffer(slug: any){
    return this.http.get(this.Url+'offers/'+slug).pipe(map((data: any) => data.body as Offer));;
  }
}
