import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRequest } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.baseUrl
    this.myApiUrl = 'api/v1'
  }

  login(user: UserRequest): Observable<any> {
    return this.http.post(`${this.myAppUrl}/${this.myApiUrl}/auth/login`, user);
  }
}
