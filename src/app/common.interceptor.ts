import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let lang = localStorage.getItem('lang');
    if (lang){
      const clonedReq = request.clone({
        headers: new HttpHeaders()
          .append('Accept-Language', lang )
      });
      return next.handle(clonedReq);
    }
    return next.handle(request.clone());
  }
}
