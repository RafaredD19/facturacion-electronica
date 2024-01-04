import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');

      if (token) {
        // Si hay un token, redirigir al dashboard si se intenta acceder a la página de inicio de sesión
        if (state.url === '/login') {
          return this.router.parseUrl('/dashboard');
        }
        return true;
      }
  
      // Si no hay token, redirigir a la página de inicio de sesión
      return this.router.parseUrl('/login');
    } else {
      return false
    }
  }
}
