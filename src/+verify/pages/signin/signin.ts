import { SigninService } from './../../services/signin.service';
import { PrivateTemplate } from './../../../+private/private.template';
import { ForgotpasswordPage } from './../forgotpassword/forgotpassword';
import { SignupPage } from './../signup/signup';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedbackService } from './../../../app/services/feedback.service';
import { UserService } from './../../../app/services/user.service';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public FeedbackService: FeedbackService,
    public SigninService: SigninService,
  public UserService :UserService ) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
