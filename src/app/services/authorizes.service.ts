import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizesService {
  nameToken: string = 'tk';
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.myAppUrl = environment.baseUrl;
    this.myApiUrl = "api/v1";
  }

  getToken(): string {
    if (typeof localStorage !== 'undefined') {
      console.log("------------------1")
    } else if (typeof sessionStorage !== 'undefined') {
      // Fallback to sessionStorage if localStorage is not supported
      console.log("------------------2")
    } else {
      // If neither localStorage nor sessionStorage is supported
      console.log('Web Storage is not supported in this environment.');
    }
    return localStorage.getItem(this.nameToken)!;
  }

  setToken(token: string) {
    localStorage.setItem(this.nameToken, token)
  }

  closeSession() {
    localStorage.removeItem(this.nameToken);
    localStorage.clear();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
