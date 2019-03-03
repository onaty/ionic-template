import { PrivateModule} from './../+private/private.module';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInterceptor} from './services/httpclient.interceptor'
import { HTTP_INTERCEPTORS} from '@angular/common/http';

import { MyApp } from './app.component';
import { SigninPage } from './../+verify/pages/signin/signin';

import { VerifyModule } from '../+verify/verify.module';

import { FeedbackService } from './services/feedback.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    MyApp,
    // Ng2CloudinaryModule,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: " ",
      loadingSpinner: "ios"
    }),
    IonicStorageModule.forRoot(),
    VerifyModule,
    PrivateModule,
    HttpClientModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true},
    SplashScreen,
    FeedbackService,
    UserService,
    AuthService,
  ]
})

export class AppModule {
}
