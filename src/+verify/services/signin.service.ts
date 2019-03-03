import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../+shared/config';
@Injectable()
export class SigninService {

  constructor(private http: HttpClient) {

  }

  signin(data) {
    return new Promise((resolve, reject) => {
      this.http.post(`${AppConfig.REST_API}/v1/auth/login`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  forgotpassword(data) {
    return new Promise((resolve, reject) => {
      this.http.post(`${AppConfig.REST_API}/v1/auth/forgotpassword`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  getsubsid() {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/v1/subscriptiontype`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  getsubsida() {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/v1/subscriptiontype/1`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  getsubsidm() {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/v1/subscriptiontype/2`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
}
