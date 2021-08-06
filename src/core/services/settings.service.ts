import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Settings} from "../../Models/settings";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private Url = environment.url();

  constructor(private http: HttpClient) {
  }

  get(): Observable<Settings[]> {
    return this.http.get<Settings[]>(this.Url + 'settings')
      .pipe(map((data: any) => data.body as Settings[]));
  }
}
