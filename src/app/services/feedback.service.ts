import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { AuthService } from './auth.service';

@Injectable()
export class FeedbackService {

  constructor(private toastCtrl: ToastController,
    public events: Events,
    public authservice: AuthService

  ) {
  }

  show(type: string, msg: string = null, res: any = null, ) {
    if (res) {
    
      console.log(res.error.error.type,'eerrereerer')
      if (res.status == 0) {
        this.toastCtrl.create({
          message: 'No internet Connection. Please connect and try again',
          duration: 5000,
          position: 'top',
          showCloseButton: true,
          // closeButtonText: "Undo",
          cssClass: type
        }).present();
      }
      else if (res.error.error.type == "INVALID_TOKEN_ERR") {
        // console.log(res.error.error.description)
        console.log('bad jwt request')
        const message = "Your Session has Expired. Kindly Login";
        this.toastCtrl.create({
          message: message,
          duration: 5000,
          showCloseButton: true,
          // closeButtonText: "Undo",
          position: 'top',
          cssClass: 'danger'
        }).present();
        this.authservice.signOut()
      }
      else if (res.status == 404) {
        this.toastCtrl.create({
          message: 'Please try again in a few minutes or contact Customer care',
          duration: 5000,
          showCloseButton: true,
          // closeButtonText: "Undo",
          position: 'top',
          cssClass: type
        }).present();


      }
      else if (res.error.message == 'Internal Server Error, please try again') {
        this.toastCtrl.create({
          message: 'Server error, Please try again or contact customer care',
          duration: 5000,
          showCloseButton: true,
          // closeButtonText: "Undo",
          position: 'top',
          cssClass: type
        }).present();
      }
      else if (res.status == 401) {
        this.toastCtrl.create({
          message: 'You are Unauthorized',
          duration: 5000,
          showCloseButton: true,
          // closeButtonText: "Undo",
          position: 'top',
          cssClass: type
        }).present();
      }
      else if (res.status == 400) {
        // console.log(res.error.error.description)
        // console.log('bad request')
        const message = res.error.error.description ? `${msg}. ${res ? `${res.error.error.description}.` : " "}` : `${msg}`;
        this.toastCtrl.create({
          message: message,
          duration: 5000,
          showCloseButton: true,
          // closeButtonText: "Undo",
          position: 'top',
          cssClass: type
        }).present();

      }

      else {
        // console.log(res)
        // console.log('bad request2')
        const message = 'Error, Please try again or contact customer care';
        this.toastCtrl.create({
          message: message,
          duration: 5000,
          showCloseButton: true,
          // closeButtonText: "Undo",
          position: 'top',
          cssClass: type
        }).present();
      }
    } else {
      // console.log(res)
      // console.log('bad request')
      const message = msg;
      this.toastCtrl.create({
        message: message,
        duration: 5000,
        showCloseButton: true,
        // closeButtonText: "Undo",
        position: 'top',
        cssClass: type
      }).present();
    }
  }

}
