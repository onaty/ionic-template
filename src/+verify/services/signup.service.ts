import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../+shared/config';
@Injectable()
export class SignupService {

  constructor(private http: HttpClient) {

}

createbusinessowner(data) {
  return new Promise ((resolve, reject) => {
    this.http.post(`${AppConfig.REST_API}/v1/auth/create/user/businessOwner`, data)
    .subscribe((res) => resolve(res), (err) => reject(err));
  })
}

createbusiness(data) {
  return new Promise ((resolve, reject) => {
    this.http.post(`${AppConfig.REST_API}/v1/business`, data)
    .subscribe((res) => resolve(res), (err) => reject(err));
  })
}

createstore(data,businessid) {
  return new Promise ((resolve, reject) => {
    this.http.post(`${AppConfig.REST_API}/v1/store/`+businessid, data)
    .subscribe((res) => resolve(res), (err) => reject(err));
  })
}

getallcountries(){
  return new Promise((resolve, reject) => {
    this.http.get(`${AppConfig.REST_API}/v1/country/list`)
      .subscribe((res) => resolve(res), (err) => reject(err));
  })
}

getallcategory(){
  return new Promise((resolve, reject) => {
    this.http.get(`${AppConfig.REST_API}/v1/businesscategory`)
      .subscribe((res) => resolve(res), (err) => reject(err));
  })
}

}
