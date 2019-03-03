import { SigninService } from './../../services/signin.service';

import { SignupPage } from './../signup/signup';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController } from 'ionic-angular';
import { FeedbackService } from './../../../app/services/feedback.service';
import { UserService } from './../../../app/services/user.service';
import { SigninPage } from '../signin/signin';
/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  email = ''
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public FeedbackService: FeedbackService,
    public SigninService: SigninService,
    public UserService: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }


  signup() {
    this.navCtrl.setRoot(SignupPage)
  }
  signin() {
    this.navCtrl.setRoot(SigninPage)
  }
  forgot() {
    if (this.email == '') return this.FeedbackService.show('danger', 'Enter your email address')
    let loader = this.loadingCtrl.create();
    loader.present();
    this.SigninService.forgotpassword({ email: this.email }).then((data: any) => {
      this.FeedbackService.show('danger', 'Please check your email address')
      loader.dismiss()
    }).catch((err) => {
      loader.dismiss()
      this.FeedbackService.show('danger', '', err)
    });
  }
}
