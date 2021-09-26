import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Seo} from "../../Models/seo";
import {environment} from "../../environments/environment";
import {MetaTagService} from "./Helpers/meta-tag.service";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private Url = environment.url();

  constructor(private http: HttpClient,
              private metaService: MetaTagService) {
  }

  Seo(slug: any) {
    return this.http.get(this.Url + 'seo/' + slug).pipe(map((data: any) => data.body as Seo));
  }

  updateMetaTags(seo:Seo) {
    window.dataLayer = [];
    let image = 'https://boatsride.com/logo.png';
    // @ts-ignore
    this.metaService.updateTags(seo?.title, seo?.description, image);
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      'event': 'details',
      'ecommerce': {
        'currencyCode': 'AED',
        'detail': {
          'products': [{
          }]
        }
      }
    });
  }
}
