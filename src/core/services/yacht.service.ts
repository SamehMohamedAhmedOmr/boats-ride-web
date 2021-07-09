import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Yacht} from '../../Models/yacht';

@Injectable({
  providedIn: 'root'
})
export class YachtService {

  private Url = environment.url();
  constructor(
    private http: HttpClient,
  ) {
  }
  getYachts() :Observable<Yacht[]>{
    console.log(this.Url);
    return this.http.get<Yacht[]>(this.Url+'yachts').pipe(map((data: any) => data.body as Yacht[]));;
  }
  getYacht(slug: any){
    return this.http.get(this.Url+'yachts/'+slug).pipe(map((data: any) => data.body as Yacht));;
  }
}
