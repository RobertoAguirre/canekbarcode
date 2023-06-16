import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import * as cryptoJs from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  login(params: any) {
    console.log(params);
    return this.http.post<any>(`${this.baseURL}login`, params);
  }

  register(params: any) {
    return this.http.post<any>(`${this.baseURL}register`, params);
  }

}
