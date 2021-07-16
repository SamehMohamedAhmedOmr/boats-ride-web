import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Blogs} from '../../Models/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private Url = environment.url();

  constructor(private http: HttpClient) {
  }

  getBlogs(): Observable<Blogs[]> {
    return this.http.get<Blogs[]>(this.Url + 'blogs').pipe(map((data: any) => data.body as Blogs[]));

  }

  getBlog(slug: any) {
    return this.http.get(this.Url + 'blogs/' + slug).pipe(map((data: any) => data.body as Blogs));
  }
}
