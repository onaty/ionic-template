import { from } from 'rxjs/observable/from';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from "@ionic/storage";
import { AppConfig } from '../../+shared/config';
// import { User } from '../../+shared/models/user.model';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {

  constructor(private storage: Storage,
              private http: HttpClient,
							private authService: AuthService) {
  }

  // currentUser: User

  _setlocal(entity,user) {
    return this.storage.set(entity, user)
      .then((user) => user);
  }

  // Convert the promise from AuthService to an observable to solve your asyc httpClient interceptor problem
  getUserToken (): Observable<string> {
    return from(this.authService._getToken());
	}
  _clearlocal(){
    return this.storage.clear();
  }

  getCurrentTokenLocal() {
    return this.storage.get('token');
  }

  getCurrentLocal(value) {
    return this.storage.get(value);
  }

  _setAuthToken(token) {
		return this.storage.set('token', token);
  }
  isLoggedin() {
    return this.storage.get('token');
  }

  getCurrentUserLocal() {
    return this.storage.get('currentUser')
  }

  removeCurrentUserLocal() {
    return this.storage.remove('currentUser');
  }

  storePushToken(token, businessId, storeId){
    return new Promise ((resolve, reject) => {
      this.http.post(`${AppConfig.REST_API}/v1/pushnotificationtoken/${businessId}/${storeId}`, token)
      .subscribe((res) => resolve(res), (err) => reject(err));
    })
  }
}
