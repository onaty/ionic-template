
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController,  } from 'ionic-angular';
import { FeedbackService } from './../../../app/services/feedback.service';

/**
 * Generated class for the EditcustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editcustomer',
  templateUrl: 'editcustomer.html',
})
export class EditcustomerPage {

  constructor(public loadingCtrl: LoadingController,public viewCtrl: ViewController,
    public FeedbackService: FeedbackService,
    public navCtrl: NavController,
    public navParams: NavParams,)  {
     


  }

  ionViewDidLoad() {
  }
}
