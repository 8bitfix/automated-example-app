import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class CmsRequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes(environment.cmsUrl)) {
      const requestClone = request.clone({
        setHeaders: {
          authorization: `bearer ${environment.cmsKey}`
        }
      })
      return next.handle(requestClone);
    }
    return next.handle(request);
  }
}
