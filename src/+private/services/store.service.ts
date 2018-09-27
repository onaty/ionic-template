import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../+shared/config';
@Injectable()
export class StoreService {

  constructor(private http: HttpClient) {

  }

  //   createcustomers(data,businessId,storeId) {
  //     return newc Promise((resolve, reject) => {
  //       this.http.post(`${AppConfig.REST_API}/api/storecustomer/${businessId}/${storeId}`, data)
  //         .subscribe((res) => resolve(res), (err) => reject(err));
  //     })
  //   }

  //   getallcustomers(businessId,storeId){
  //     return new Promise((resolve, reject) => {
  //       this.http.get(`${AppConfig.REST_API}/api/storecustomer/${businessId}/${storeId}`)${businessid}/${storeid}/${userid}
  //         .subscribe((res) => resolve(res), (err) => reject(err));
  //     })
  //   }

  updatebusinessprofile(data, businessid) {
    return new Promise((resolve, reject) => {
      this.http.put(`${AppConfig.REST_API}/api/business/${businessid}`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

     getallbusinessprofile(businessId){
      return new Promise((resolve, reject) => {
        this.http.get(`${AppConfig.REST_API}/api/business/${businessId}`)
          .subscribe((res) => resolve(res), (err) => reject(err));
      })
    }


}
