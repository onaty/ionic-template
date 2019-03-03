
import { FeedbackService } from './../../../app/services/feedback.service';
import { AuthService } from './../../../app/services/auth.service';
import { UserService } from './../../../app/services/user.service';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninPage } from './../signin/signin';
import { SignupService } from './../../services/signup.service';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  @ViewChild(Content) content: Content;
  private info: FormGroup;
  steptwo = false;
  data: any;
  business_category;
  country;
  constructor(public UserService: UserService,public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public SignupService: SignupService,
    public AuthService: AuthService,
    public FeedbackService: FeedbackService) {
    this.info = this.formBuilder.group({
      business_name: ['', Validators.required],
      unique_name: [''],
      user_full_name: [''],
      email: ['', Validators.required],
      phone: ['',Validators.required],
      user_password: ['', Validators.required],
      city: ['none'],
      country: ['Nigeria'],

    });
    this.UserService.getCurrentLocal('signupcountry').then((data) => {
      if (data) {
        this.country = data;
      }
    })
  }

 

  ionViewDidLoad() {
  
  }
  page() {
    this.navCtrl.setRoot(SigninPage);
  }


}
