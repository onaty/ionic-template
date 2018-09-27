import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-customerslist',
  templateUrl: 'customerslist.html',
})
export class CustomerslistPage {

  constructor(
    public popoverCtrl: PopoverController,
    public navCtrl: NavController,
    public navParams: NavParams,

    public modctrl: ModalController,
    private formBuilder: FormBuilder, ) {

  }


  ionViewDidLoad() {

    console.log('ionViewDidLoad AllbrandsPage');
  }
}
