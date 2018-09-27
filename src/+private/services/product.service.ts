import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../+shared/config';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {

  }

  additem(data,businessid,storeid) {
    return new Promise((resolve, reject) => {
      this.http.post(`${AppConfig.REST_API}/api/products/${businessid}/${storeid}`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  addproductitem(data,businessid,storeid) {
    return new Promise((resolve, reject) => {
      this.http.post(`${AppConfig.REST_API}/api/productitem/${businessid}/${storeid}`, data)
        .subscribe((res) => resolve(res), (err) => {
        console.log(err);
        reject(err);});
    })
  }

  addbrands(data,businessid,storeid) {
    return new Promise((resolve, reject) => {
      this.http.post(`${AppConfig.REST_API}/api/brand/${businessid}/${storeid}`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  addcategorys(data,businessid,storeid) {
    return new Promise((resolve, reject) => {
      this.http.post(`${AppConfig.REST_API}/api/productcategory/${businessid}/${storeid}`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
  getitems(businessid,storeid) {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/products/${businessid}/${storeid}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }



  getservices(businessid,storeid) {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/services/${businessid}/${storeid}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  getallproductitems(businessid,storeid) {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/store/${businessid}/${storeid}/getStoreProductItems`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  getallproductitemspagination(businessid,storeid,page) {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/store/${businessid}/${storeid}/getStoreProductItems?current=${page}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  getbrands(businessid,storeid) {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/brand/bystore/${businessid}/${storeid}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  getcategory(businessid,storeid) {console.log('get categprtt')
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/productcategory/bystore/${businessid}/${storeid}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  updateitem(data,businessid,storeid,productid) {
    return new Promise((resolve, reject) => {
      this.http.put(`${AppConfig.REST_API}/api/productitem/${businessid}/${storeid}/${productid}`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
  updatebrand(data,businessid,storeid,brandid) {
    return new Promise((resolve, reject) => {
      this.http.put(`${AppConfig.REST_API}/api/brand/${businessid}/${storeid}/${brandid}`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
  updatecategory(data,businessid,storeid,categoryid) {
    return new Promise((resolve, reject) => {
      this.http.put(`${AppConfig.REST_API}/api/productcategory/${businessid}/${storeid}/${categoryid}`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
  getsingleitem(businessid,storeid,productid) {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/productitem/${businessid}/${storeid}/${productid}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  removeitem(businessid,storeid,productid) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${AppConfig.REST_API}/api/productitem/${businessid}/${storeid}/${productid}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  increasestock(data,businessid,storeid,productid){
    return new Promise((resolve, reject) => {
      this.http.put(`${AppConfig.REST_API}/api/productitem/increasestock/${businessid}/${storeid}/${productid}`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  Decreasetock(data,businessid,storeid,productid){
    return new Promise((resolve, reject) => {
      this.http.put(`${AppConfig.REST_API}/api/productitem/decreasestock/${businessid}/${storeid}/${productid}`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
}
