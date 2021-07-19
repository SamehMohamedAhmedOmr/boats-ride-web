import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {WaterSportBookingSerializer} from "../../Serializers/Booking/water.sport.booking.serializer";
import {WaterSportBookingModel} from "../../../Models/Booking/water.sport.booking.model";
import {ContactUsBookingSerializer} from "../../Serializers/Booking/contact.us.booking.serializer";
import {ContactUsBookingModel} from "../../../Models/Booking/contact.us.booking.model";


@Injectable({
  providedIn: 'root'
})

export class ContactUsBookingService {
  private http: HttpClient;
  private url:string;
  private endpoint:string;
  private serializer:ContactUsBookingSerializer;

  constructor(Http: HttpClient) {
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'contact-us';
    this.serializer = new ContactUsBookingSerializer();
  }

  public create(item: ContactUsBookingModel): Observable<ContactUsBookingModel> {
    return this.http
      .post<ContactUsBookingModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as ContactUsBookingModel));
  }

}
