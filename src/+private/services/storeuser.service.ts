import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../+shared/config';
@Injectable()
export class StoreuserService {

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
  updateuserpassword(data,businessid,storeid,userid) {
    return new Promise((resolve, reject) => {
      this.http.put(`${AppConfig.REST_API}/api/v1/auth/changepassword`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
}
