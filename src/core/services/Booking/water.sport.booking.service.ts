import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {WaterSportBookingSerializer} from "../../Serializers/Booking/water.sport.booking.serializer";
import {WaterSportBookingModel} from "../../../Models/Booking/water.sport.booking.model";


@Injectable({
  providedIn: 'root'
})

export class WaterSportBookingService {
  private http: HttpClient;
  private url:string;
  private endpoint:string;
  private serializer:WaterSportBookingSerializer;

  constructor(Http: HttpClient) {
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'water_sports_requests';
    this.serializer = new WaterSportBookingSerializer();
  }

  public create(item: WaterSportBookingModel): Observable<WaterSportBookingModel> {
    return this.http
      .post<WaterSportBookingModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as WaterSportBookingModel));
  }

}
