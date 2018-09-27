
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController, LoadingController, ViewController, } from 'ionic-angular';
import { FeedbackService } from '../../../app/services/feedback.service';
/**
 * Generated class for the SaleshistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saleshistory',
  templateUrl: 'saleshistory.html',
})
export class SaleshistoryPage {

  constructor(public loadingCtrl: LoadingController,
    public viewctrl: ViewController, public navCtrl: NavController,
    public navParams: NavParams,
    private FeedbackService: FeedbackService,

    public modctrl: ModalController, ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaleshistoryPage');
    // this.fetchhistory()

  }

}
