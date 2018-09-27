import { PrivateTemplate } from './../../../+private/private.template';
import { FeedbackService } from './../../../app/services/feedback.service';
import { SellproductPage } from './../../../+private/pages/sellproduct/sellproduct';
import { AuthService } from './../../../app/services/auth.service';
import { UserService } from './../../../app/services/user.service';
import { Component , ElementRef,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Content} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninPage } from './../signin/signin';
import { SignupService } from './../../services/signup.service';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public UserService: UserService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public SignupService: SignupService,
    public AuthService: AuthService,
    public FeedbackService: FeedbackService) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


}
