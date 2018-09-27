import { SaleshistoryPage } from './../pages/saleshistory/saleshistory';
import { CustomerslistPage } from './../pages/customerslist/customerslist';
import { SettingPage } from './../pages/setting/setting';
import { ItemslistPage } from './../pages/itemslist/itemslist';
import { SigninPage } from './../../+verify/pages/signin/signin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellproductPage } from './../pages/sellproduct/sellproduct';
/**
 * Generated class for the SidebarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sidebar',
  templateUrl: 'sidebar.html',
})
export class SidebarPage {
  SellproductPage = SellproductPage;
  ItemslistPage = ItemslistPage;
  SettingPage = SettingPage;
  CustomerslistPage = CustomerslistPage;
  SaleshistoryPage = SaleshistoryPage;
  // SettingsPage = SettingsPage;

  sideMenu: any = [
    { title: "Events", page: SellproductPage },
    // { title: "Jobs", page: JobsPage},
    // { title: "HOPE", page: HopePage},
    // { title: "Transcript", page: TranscriptPage},
    // { title: "Podcast", page: PodcastPage},
    // { title: "Alumni Dues", page: AlumniDuesPage},
    // { title: "Alumni Reports", page: FinancialReportsPage},
    // { title: "Make Donations", page: DonationsPage},
    // { title: "Help", page: ReportPage}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  page() {
    this.navCtrl.setRoot(SigninPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SidebarPage');
  }

  openPage(nav: any) {
    this.navCtrl.push(nav.page);
  }
}
