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
    const token = localStorage.getItem('token')
    if (token) {
      req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    }
    return next.handle(req).pipe(
      catchError((error: any) => {
        if (error.status === 401) {
          console.log("acceso denegado")
          this.router.navigate(['/login'])
        }
        return throwError(() => error);
      })
    )
  }
};
