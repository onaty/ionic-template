import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../+shared/config';
@Injectable()
export class SigninService {

  constructor(private http: HttpClient) {

  }

  signin(data) {
    return new Promise((resolve, reject) => {
      this.http.post(`${AppConfig.REST_API}/api/v1/auth/login`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  forgotpassword(data) {
    return new Promise((resolve, reject) => {
      this.http.post(`${AppConfig.REST_API}/api/v1/auth/recoverpassword`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }


}
