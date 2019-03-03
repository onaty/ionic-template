
import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';

// import { HeaderComponent } from "./components/header/header";

// Pages Start
import { SignupPage } from './pages/signup/signup';
import { SigninPage } from './pages/signin/signin';
import{ForgotpasswordPage}  from './pages/forgotpassword/forgotpassword';
// Pages End


// Services Start

import { SigninService } from "./services/signin.service";

import { SignupService } from "./services/signup.service";

//  Services End


@NgModule({
  declarations: [
    SigninPage,
    SignupPage,
    ForgotpasswordPage,
  ],
  imports: [
    IonicModule,
  ],
  bootstrap:[IonicApp],
  entryComponents: [
    SigninPage,
    SignupPage,
    ForgotpasswordPage,
  ],
  providers: [
    SigninService,
    SignupService,
  ]
})

export class VerifyModule {}
