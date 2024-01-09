import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class addTokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (typeof localStorage !== 'undefined') {
      console.log("------------------------1-interceptor")
      const token = localStorage.getItem('token')
      console.log(token)
      if (token) {
        req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
      }
      return next.handle(req).pipe(
        catchError((error: any) => {
          if (error.status === 401) {
            this.router.navigate(['/login'])
          }
          return throwError(() => error);
        })
      )
    } else {
      console.log("------------------------2-interceptor")
      return next.handle(req).pipe(
        catchError((error: any) => {
          if (error.status === 401) {
            this.router.navigate(['/login'])
          }
          return throwError(() => error);
        })
      )
    }
  }
};
