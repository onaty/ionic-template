import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../+shared/config';
@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {

  }

  createcustomers(data,businessId,storeId) {
    return new Promise((resolve, reject) => {
      this.http.post(`${AppConfig.REST_API}/api/storecustomer/${businessId}/${storeId}`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  getallcustomers(businessId,storeId){
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/storecustomer/${businessId}/${storeId}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
  getallcustomerspagination(businessId,storeId,page){
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/storecustomer/${businessId}/${storeId}?current=${page}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
  getallcustomersummary(businessId,storeId){
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/storecustomer/store/summary/${businessId}/${storeId}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
  getallcustomerbystore(businessId,storeId){
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/storecustomer/store/${businessId}/${storeId}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
  getsinglecustomersummary(businessId,storeId,customerID){
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/storecustomer/${businessId}/${storeId}/${customerID}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
  updatecustomer(data,businessid,storeid,customerid) {
    return new Promise((resolve, reject) => {
      this.http.put(`${AppConfig.REST_API}/api/storecustomer/${businessid}/${storeid}/${customerid}`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
}
