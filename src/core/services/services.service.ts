import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Services} from '../../Models/services';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private Url = environment.url();
  constructor(
    private http: HttpClient,
  ) {
  }

  getSevices() :Observable<Services[]>{
    return this.http.get<Services[]>(this.Url+'services').pipe(map((data: any) => data.body as Services[]));;
  }
  getService(slug: any){
    return this.http.get(this.Url+'services/'+slug).pipe(map((data: any) => data.body as Services));;
  }
}
