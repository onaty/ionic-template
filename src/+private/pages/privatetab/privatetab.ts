import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TransactionsPage } from '../transactions/transactions';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the PrivatetabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-privatetab',
  templateUrl: 'privatetab.html',
})
export class PrivatetabPage {
  tab1Root = HomePage;
  tab2Root = TransactionsPage;
  tab3Root = SettingsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivatetabPage');
  }

}
