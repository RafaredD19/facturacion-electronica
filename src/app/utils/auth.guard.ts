import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token')
      if (token == undefined) {
        this.router.navigate(['/login'])
        return false
      }
      return true
    } else {
      return false
    }
  }
}