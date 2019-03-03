import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { NavController } from 'ionic-angular';
import { SigninPage } from '../../+verify/pages/signin/signin';

@Injectable()
export class AuthService {
  constructor(private storage: Storage, ){
  }
  _getToken():Promise<any>{
    return this.storage.get('token')
  }


  signOut(){
    this.storage.clear().then(()=>{
      location.reload();
    })
    localStorage.clear();
   
    console.log('ina auth prov')
      //  this.nav.setRoot(SigninPage)
        // setRoot(SigninPage);
  }
}
