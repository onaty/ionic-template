import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

@Injectable()
export class AuthService {
  constructor(private storage: Storage){
  }

  _getToken():Promise<any>{
    return this.storage.get('token')
  }

}
