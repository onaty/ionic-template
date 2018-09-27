import { FeedbackService } from './../../app/services/feedback.service';
import { UserService } from './../../app/services/user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../+shared/config';
import { Storage } from "@ionic/storage";
@Injectable()
export class TransactionService {
  deletecart = (data, column, search) => {
    let result = data.filter(m => m[column] !== search);

    return result;
  }
  constructor(private http: HttpClient, 
    public Storage: Storage,
     public UserService: UserService,
     public FeedbackService:FeedbackService ) {

  }
  getpaymentmethods(businessid, storeid) {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/paymentmethod/${businessid}/${storeid}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  gettransactionsummary(businessid, storeid) {

    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/transactionlog/bystore/summary/${businessid}/${storeid}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  getcustomtransactionsummary(businessid, storeid,period) {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/transactionlog/bystore/summary/${businessid}/${storeid}${period}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
  gettransactionhistory(businessid, storeid) {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/transactionlog/bystore/${businessid}/${storeid}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  getcustomtransactionhistory(businessid, storeid,period) {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/transactionlog/bystore/${businessid}/${storeid}${period}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  getinvoicehistory(businessid, storeid) {
    return new Promise((resolve, reject) => {
      this.http.get(`${AppConfig.REST_API}/api/transactionlog/invoice/${businessid}/${storeid}`)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  async  addtocart(items) {
    //  ####
    await this.UserService.getCurrentLocal("cartitems").then((data) => {
      console.log("auth cart")
      console.log(data)
      var toFind;
      let truth = false;

      for (var i = 0, len = data.length; i < len; i++) {
        if (data[i].name === items.name) {
          console.log(data[i].quantity )
          console.log(data[i].limit )
          if (data[i].quantity >= data[i].limit) return this.FeedbackService.show('danger', "Please this quantity is not available for " + data[i].name)

          data[i].quantity += 1;
          truth = true;
          this.UserService.getCurrentLocal("onlycart").then((fonly) => {
            console.log(fonly)
            for (var k = 0, len = fonly.length; k < len; k++) {
              if (fonly[k].id === data[i].id) {
                fonly[i].quantity += 1;
                return this.Storage.set('onlycart', fonly);

              }
            }
          })
          this.UserService.getCurrentLocal("cartprice").then((data) => {
            if (data.discountp > 0) {
              let p = data.discountp / 100;

              data.subtotal = data.subtotal + Number(items.price);
              data.tax = 0;
              data.total = data.total- ( data.subtotal * p);
              data.discount = data.total - data.subtotal;
              return this.Storage.set('cartprice', data);
            } else if (data.discount > 0) {
              data.subtotal = data.subtotal + Number(items.price);
              data.tax = 0;
              data.total = data.subtotal - data.discount
              return this.Storage.set('cartprice', data);
            } else {
              data.subtotal = data.subtotal + Number(items.price);
              data.tax = 0;
              data.total = data.subtotal;
              return this.Storage.set('cartprice', data);
            }

          });
          break;
        }
      }
      if (truth == false) {
        this.UserService.getCurrentLocal("onlycart").then((fonly) => {

          let cartonly = {
            id: items.id,
            quantity: items.quantity,
            discount: items.discount
          }
          console.log(cartonly)
          fonly.push(cartonly)

          return this.Storage.set('onlycart', fonly);

        })

        this.UserService.getCurrentLocal("cartprice").then((data) => {

          if (data.discountp > 0) {
            let p= data.discountp / 100;

            data.subtotal = data.subtotal + Number(items.price);
            data.tax = 0;
            data.total = data.total- (  data.subtotal * p);
            data.discount = data.total - data.subtotal;
          } else if (data.discount > 0) {
            data.subtotal = data.subtotal + Number(items.price);
            data.tax = 0;
            data.total = data.subtotal - data.discount
          } else {
            data.subtotal = data.subtotal + Number(items.price);
            data.tax = 0;
            data.total = data.subtotal;
          }
          return this.Storage.set('cartprice', data);

        });
        data.push(items);
      }
      return this.Storage.set('cartitems', data);
    });
    return this.Storage.set('cartentry', '2');
    //  #####

  }

  async  removeitemfromcart(item) {
    await this.UserService.getCurrentLocal('cartitems').then((items) => {
      for (var i = 0, len = items.length; i < len; i++) {
        if (items[i].name === item.name) {
          this.UserService.getCurrentLocal("onlycart").then((fonly) => {
            for (var k = 0, len = fonly.length; k < len; k++) {
              fonly = this.deletecart(fonly, 'id', item.id);
              this.Storage.set('onlycart', fonly);
            }
          })
          this.UserService.getCurrentLocal("cartprice").then((price) => {

            if (price.discountp > 0) {
              let p = price.discountp / 100;

              price.subtotal = price.subtotal - (Number(item.price) * Number(item.quantity));
              price.tax = 0;
              price.total =price.total- (  price.subtotal * p);
              price.discount = price.total - price.subtotal;
              return this.Storage.set('cartprice', price);
            } else if (price.discount > 0) {
              price.subtotal = price.subtotal - (Number(item.price) * Number(item.quantity));
              price.tax = 0;
              price.total = price.subtotal - price.discount
              return this.Storage.set('cartprice', price);
            } else {
              price.subtotal = price.subtotal - (Number(item.price) * Number(item.quantity));
              price.tax = 0;
              price.total = price.subtotal;
              return this.Storage.set('cartprice', price);
            }
          });
          items = this.deletecart(items, 'name', item.name);
          this.Storage.set('cartitems', items);
          break;
        }
      }
    });
    return this.Storage.set('cartitemsentry', "2");
  }

  async subtractone(items) {
    await this.UserService.getCurrentLocal("cartitems").then((item) => {
      for (var i = 0, len = item.length; i < len; i++) {
        if (item[i].name === items.name) {
          item[i].quantity -= 1;
          this.UserService.getCurrentLocal("onlycart").then((fonly) => {
            for (var k = 0, len = fonly.length; k < len; k++) {
              if (fonly[k].id === item[i].id) {
                fonly[i].quantity -= 1;


                this.Storage.set('onlycart', fonly);
                break;
              }
            }
          })
          this.UserService.getCurrentLocal("cartprice").then((price) => {

            if (price.discountp > 0) {
              let p = price.discountp / 100;

              price.subtotal = price.subtotal - Number(items.price);
              price.tax = 0;
              price.total = price.total- ( price.subtotal * p);
              price.discount = price.total - price.subtotal;
            } else if (price.discount > 0) {
              price.subtotal = price.subtotal - Number(items.price);
              price.tax = 0;
              price.total = price.subtotal - price.discount
            } else {
              price.subtotal = price.subtotal - Number(items.price);
              price.tax = 0;
              price.total = price.subtotal;
            }
            this.Storage.set('cartprice', price);
            this.Storage.set('cartitems', item);
          });
          break;
        }
      }
    });
    return this.Storage.set('cartitemsentry', "2");
  }

  async  addone(items) {
    await this.UserService.getCurrentLocal("cartitems").then((item) => {
      for (var i = 0, len = item.length; i < len; i++) {
        if (item[i].name === items.name) {
          console.log(item.quantity)
          console.log(item.limit)
          console.log(item)
          if (item[i].quantity >= item[i].limit) return this.FeedbackService.show('danger', "Please this quantity is not available for " + items.name)

          item[i].quantity += 1;
          this.UserService.getCurrentLocal("onlycart").then((fonly) => {
            for (var k = 0, len = fonly.length; k < len; k++) {
              if (fonly[k].id === item[i].id) {
                fonly[i].quantity += 1;
                this.Storage.set('onlycart', fonly);
                break;
              }
            }
          })
          this.UserService.getCurrentLocal("cartprice").then((price) => {
            if (price.discountp > 0) {
              let p = price.discountp / 100;
              price.subtotal = price.subtotal + Number(items.price);
              price.tax = 0;
              price.total = price.total- (price.subtotal * p);
              price.discount = price.total - price.subtotal;
            } else if (price.discount > 0) {
              price.subtotal = price.subtotal + Number(items.price);
              price.tax = 0;
              price.total = price.subtotal - price.discount
            } else {
              price.subtotal = price.subtotal + Number(items.price);
              price.tax = 0;
              price.total = price.subtotal;
            }
            this.Storage.set('cartprice', price);
            this.Storage.set('cartitems', item);
          });
          break;
        }
      }
    });
    return this.Storage.set('cartitemsentry', "2");
  }

  completepayment(data, businessId, storeId) {
    return new Promise((resolve, reject) => {
      this.http.post(`${AppConfig.REST_API}/api/transactionlog/${businessId}/${storeId}`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }

  completeinvoice(data, businessId, storeId) {
    return new Promise((resolve, reject) => {
      this.http.post(`${AppConfig.REST_API}/api/transactionlog/${businessId}/${storeId}`, data)
        .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }


  updateinvoice(data, businessId, storeId,transactionid) {
    return new Promise((resolve, reject) => {
      // this.http.put(`${AppConfig.REST_API}/api/transactionlog/paymentupdate/${businessId}/${storeId}/${transactionid}`, data)
      this.http.put(`${AppConfig.REST_API}/api/transactionlog/invoiceupdate/${businessId}/${storeId}/${transactionid}`, data)

      .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }


}
