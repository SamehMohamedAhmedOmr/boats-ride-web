import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Offer} from '../../Models/offer';
import {WaterSport} from '../../Models/water-sport';

@Injectable({
  providedIn: 'root'
})
export class WaterSportService {

  private Url = environment.url();
  constructor(
    private http: HttpClient,
  ) {
  }
  getWaterSports() :Observable<WaterSport[]>{
    console.log(this.Url);
    return this.http.get<WaterSport[]>(this.Url+'water_sports').pipe(map((data: any) => data.body as WaterSport[]));;
  }
  getWaterSport(slug: any){
    return this.http.get(this.Url+'water_sports/'+slug).pipe(map((data: any) => data.body as WaterSport));;
  }
}
