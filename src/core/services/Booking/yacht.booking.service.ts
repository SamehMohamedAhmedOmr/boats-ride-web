import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {YachtBookingModel} from "../../../Models/Booking/yacht.booking.model";
import {YachtBookingSerializer} from "../../Serializers/Booking/yacht.booking.serializer";


@Injectable({
  providedIn: 'root'
})

export class YachtBookingService {
  private http: HttpClient;
  private url:string;
  private endpoint:string;
  private serializer:YachtBookingSerializer;

  constructor(Http: HttpClient) {
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'yacht_requests';
    this.serializer = new YachtBookingSerializer();
  }

  public create(item: YachtBookingModel): Observable<YachtBookingModel> {
    return this.http
      .post<YachtBookingModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as YachtBookingModel));
  }

}
