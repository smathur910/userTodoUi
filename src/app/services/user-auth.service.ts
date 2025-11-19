import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/env';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private api = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  userLogin(data: any) {
    return this.http.post(`${this.api}/auth/login`, data);
  }

  userSignup(data: any) {
    return this.http.post(`${this.api}/auth/register`, data);
  }

}
