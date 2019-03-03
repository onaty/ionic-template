import { SigninService } from "./../../services/signin.service";
import { ForgotpasswordPage } from "./../forgotpassword/forgotpassword";
import { SignupPage } from "./../signup/signup";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  LoadingController,
  Platform
} from "ionic-angular";
import { FeedbackService } from "./../../../app/services/feedback.service";
import { UserService } from "./../../../app/services/user.service";


@Component({
  selector: "page-signin",
  templateUrl: "signin.html"
})
export class SigninPage {
  private info: FormGroup;

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public FeedbackService: FeedbackService,
    public SigninService: SigninService,
    public UserService: UserService,
    public platform: Platform,
  ) {
    this.info = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ionViewDidLoad() {
    
  }

 
  frs() {
    this.navCtrl.setRoot(SignupPage);
  }
  signin() {
    let loader = this.loadingCtrl.create();
    loader.present();
    this.SigninService.signin(this.info.value)
      .then((data: any) => {
       
      })
      .catch(err => {
        loader.dismiss();
        this.FeedbackService.show("danger", "", err);
      });
  }

  forgot() {
    this.navCtrl.setRoot(ForgotpasswordPage);
  }
}
