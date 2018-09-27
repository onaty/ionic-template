
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, PopoverController } from 'ionic-angular';
import { FeedbackService } from '../../../app/services/feedback.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-itemslist',
  templateUrl: 'itemslist.html',
})
export class ItemslistPage {

  constructor(public popoverCtrl: PopoverController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private FeedbackService: FeedbackService,
    private formBuilder: FormBuilder,
   
    public modctrl: ModalController) {


  }



  ionViewDidLoad() {
   
    console.log('ionViewDidLoad ItemslistPage');
  }
 

}
