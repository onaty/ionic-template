import { TransactionService } from './services/transaction.service';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
import { StoreService } from './services/store.service';
import { FeedbackService } from './../app/services/feedback.service';
import { SaleshistoryPage } from './pages/saleshistory/saleshistory';
import { CustomerslistPage } from './pages/customerslist/customerslist';
import { SigninPage } from './../+verify/pages/signin/signin';
import { SettingPage } from './pages/setting/setting';
import { SellproductPage } from './pages/sellproduct/sellproduct';
import { ItemslistPage } from './pages/itemslist/itemslist';
import { Component } from "@angular/core";
import { NavController, LoadingController } from "ionic-angular";
import { UserService } from '../app/services/user.service';
import { AlertController } from 'ionic-angular';
@Component({
  selector: "private-template",
  templateUrl: "private-template.html"
})
export class PrivateTemplate {
  // rootPage = SellproductPage;
  SellproductPage = SellproductPage;
  ItemslistPage = ItemslistPage;
  SettingPage = SettingPage;
  CustomerslistPage = CustomerslistPage;
  SaleshistoryPage = SaleshistoryPage;
  // currentUser: User = new User({});
  // closeIcon: boolean = false;

  sideMenu: object = {
    Products: [
      { title: "Search Your Products", page: ItemslistPage, icon: "assets/imgs/icons/search.svg" },
     


    ],
    help: [
      // { title: "Help", page: AddproductPage, icon: "assets/imgs/icons/info.svg" }
    ],
    services: [
      // { title: "Transcript", page: AddproductPage, icon: "assets/imgs/icons/resume.svg" },
      { title: "Alumni Dues", page: ItemslistPage, icon: "assets/imgs/icons/pay.svg" },
      { title: "Alumni Reports", page: SellproductPage, icon: "assets/imgs/icons/result.svg" },
      // { title: "Make Donations", page: DonationsPage , icon: "assets/imgs/icons/donation.svg"}
    ]
  };
  businessid; storeid; userid; businesses; stores;
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public FeedbackService: FeedbackService,
    public ProductService: ProductService,
    public UserService: UserService,
    public CustomerService: CustomerService,
    public TransactionService: TransactionService,
    public loadingCtrl: LoadingController,
    public StoreService: StoreService
  ) {
    // this.getCurrentUser()

    this.UserService.getCurrentLocal('businesses').then((data) => {
      this.businesses = data;
      console.log(this.businesses)
    })

    this.UserService.getCurrentLocal('current_business').then((business_name) => {

      this.UserService.getCurrentLocal('businesses').then((data) => {

        for (var i = 0, len = data.length; i < len; i++) {
          if (data[i].business_name === business_name) {
            this.businessid = data[i].id;
            console.log(this.businessid)
            break;
          }
        }
      })
    })

    this.UserService.getCurrentLocal('current_store').then((store_name) => {
      console.log(store_name)
      this.UserService.getCurrentLocal('stores').then((data) => {
        for (var i = 0, len = data.length; i < len; i++) {
          if (data[i].name === store_name) {
            this.storeid = data[i].id;
            console.log(this.storeid)
            break;
          }
        }
      })
    })

    this.UserService.getCurrentLocal('user').then((data) => {
      this.userid = data.id;
      console.log(this.userid + 2)
    })
  }

  // getCurrentUser() {
  //   this.userService.getCurrentUser()
  //   .then((user: User) => {
  //   this.currentUser = user;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  openPage(p: any) {
    this.navCtrl.push(p.page, p.data || {});
  }

  signOut() {
    this.UserService
      ._clearlocal()
      .then(() => this.navCtrl.setRoot(SigninPage));
  }
  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: `
        Setting Up Store...
      `,
      duration: 5000
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
  }
  switchstore(biz) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Select Payment Method');

    biz.stores.forEach(methods => {
      alert.addInput({
        type: 'radio',
        label: methods.name,
        value: methods.id,

      });
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.firstview(biz.id, data);

      }
    });
    alert.present();


  }

  firstview(bizid, storeid) {
    this.presentLoadingCustom();
    let loader = this.loadingCtrl.create({
      spinner: 'ios',
      content: `
        Setting Up Store....
      `
    });
    loader.present();
    this.businessid = bizid;
    this.storeid = storeid;

    this.UserService.getCurrentLocal('firstlogin').then((firstlog) => {

      this.ProductService.getbrands(this.businessid, this.storeid).then((brand: any) => {
        this.UserService._setlocal("brands", brand.data);
        console.log(brand)
      }).catch((err) => {
        this.FeedbackService.show('danger', '......', err)
      })

      this.ProductService.getcategory(this.businessid, this.storeid).then((cat: any) => {
        this.UserService._setlocal("categorys", cat.data);
        let cartset = {
          'subtotal': 0,
          'discount': 0,
          'discountp': 0,
          'tax': 0,
          'total': 0
        };
        this.UserService._setlocal("cartprice", cartset);
        this.UserService._setlocal("cartitems", []);

        this.UserService._setlocal("onlycart", []);
        console.log(cat)
      }).catch((err) => {
        this.FeedbackService.show('danger', '......', err)
      }).then(() => {
        this.ProductService.getitems(this.businessid, this.storeid).then((products: any) => {
          this.UserService._setlocal("products", products.data)

        })
      }).catch((err) => {
        this.FeedbackService.show('danger', '......', err)
      })
        .then(() => {
          this.TransactionService.getpaymentmethods(this.businessid, this.storeid).then((meth: any) => {
            this.UserService._setlocal("pmethods", meth.data)

          })
        })
        .catch((err) => {
          this.FeedbackService.show('danger', '......', err)
        })
        .then(() => {
          this.ProductService.getallproductitems(this.businessid, this.storeid).then((items: any) => {
            this.UserService._setlocal("productitems", items.data).then(() => {

            })

          })
        }).catch((err) => {
          this.FeedbackService.show('danger', '......', err)
        })
        .then(() => {
          this.ProductService.getservices(this.businessid, this.storeid).then((items: any) => {
            this.UserService._setlocal("services", items.data);

          })
        }).catch((err) => {
          this.FeedbackService.show('danger', '......', err)
        })
        .then(() => {
          this.CustomerService.getallcustomers(this.businessid, this.storeid).then((customerlocal: any) => {
            this.UserService._setlocal("customers", customerlocal.data).then(() => {
              this.UserService._setlocal("customerselected", customerlocal.data[customerlocal.data.length - 1])
            })

          })
        }).catch((err) => {
          this.FeedbackService.show('danger', '......', err)
        })
        .then(() => {
          this.StoreService.getallbusinessprofile(this.businessid).then((profile: any) => {
            this.UserService._setlocal("businessprofile", profile.data).then(() => {
            })

          })
        }).catch((err) => {
          this.FeedbackService.show('danger', '......', err)
        })
      this.UserService._setlocal('firstlogin', "loged in")


    })




    loader.dismiss()

  }
}
