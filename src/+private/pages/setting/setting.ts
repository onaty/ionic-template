
import { SigninPage } from './../../../+verify/pages/signin/signin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController, } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SignupPage } from '../../../+verify/pages/signup/signup';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modctrl: ModalController,
    private formBuilder: FormBuilder,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
}
