import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Events } from 'ionic-angular';

@Injectable()
export class FeedbackService {

  constructor(private toastCtrl: ToastController,
              public events: Events) {
  }

  show(type: string, msg: string = null, res: any = null, ) {
    if (res) {
      if (res.status == 0) {
        this.toastCtrl.create({
          message: 'No internet Connection. Please connect and try again',
          duration: 5000,
          position: 'top',
          cssClass: type
        }).present();
      }
      else if (res.status == 401) {
        this.toastCtrl.create({
          message: 'Unauthorized',
          duration: 5000,
          position: 'top',
          cssClass: type
        }).present();
      }
      else if (res.status == 400) {
        const message = res.error.response ? `${msg}. ${res ? `${res.error.response.message}.` : " "}` : `${msg}`;
        this.toastCtrl.create({
          message: message,
          duration: 5000,
          position: 'bottom',
          cssClass: type
        }).present();
      }
      else {
        const message = msg;
        this.toastCtrl.create({
          message: message,
          duration: 5000,
          position: 'bottom',
          cssClass: type
        }).present();
      }
    } else {
      const message = msg;
      this.toastCtrl.create({
        message: message,
        duration: 5000,
        position: 'bottom',
        cssClass: type
      }).present();
    }
  }

}
