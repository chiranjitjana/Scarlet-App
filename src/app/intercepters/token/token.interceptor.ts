import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable, Subject, pipe } from 'rxjs';
import { AuthenticationService } from '../../services/index';




@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthenticationService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Accept:'application/json',
        Authorization: 'Bearer '+this.auth.getToken().replace(/['"]+/g, '')
      }
    });
    return next.handle(request);
  }
}
