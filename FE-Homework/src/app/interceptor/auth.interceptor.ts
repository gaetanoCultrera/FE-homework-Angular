import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  baseHeader: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json;',
  });
  constructor(private _router: Router) {}

  //header management, we set the bearer token to access the private area
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('accessToken');
    if (token) {
      // If we have a token, we set it to the header
      httpRequest = httpRequest.clone({
        headers: this.baseHeader.set('Authorization', `Bearer ${token}`),
      });
    }
    return next.handle(httpRequest).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            alert('Error, try again');
            this._router.navigate(['/login']);
          }
        }
        return throwError(err.message);
      })
    );
  }
}
