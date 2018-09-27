
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FeedbackService } from '../../../app/services/feedback.service';
/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {


  constructor(public loadingCtrl: LoadingController,
    public FeedbackService: FeedbackService,
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }

}
