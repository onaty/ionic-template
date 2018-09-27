
import { SidebarPage } from './../../sidebar/sidebar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController, LoadingController } from 'ionic-angular';

import { FeedbackService } from './../../../app/services/feedback.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-sellproduct',
  templateUrl: 'sellproduct.html',
})
export class SellproductPage {

  constructor(public modalCtrl: ModalController,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public FeedbackService: FeedbackService,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public modctrl: ModalController) {


  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad SellproductPage');
  }ß
}





