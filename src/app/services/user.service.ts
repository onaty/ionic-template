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
    console.log("token")
    return Observable.fromPromise(this.authService._getToken());
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

  pagination(){
    
  }

  // getCurrentUser() {
  //   return this.http.get(`${AppConfig.REST_API}/user/current`)
  //   .map((res: any) => {
  //     // let user = new User(Object.assign({}, res.response.data.user));
  //     // this._setCurrentUserLocal(user);
  //     return res;
  //   })
  //   .toPromise();
  // }

  // storePushToken(token){
  //   return new Promise ((resolve, reject) => {
  //     this.http.post(`${AppConfig.REST_API}/pushtoken/store`, token)
  //     .subscribe((res) => resolve(res), (err) => reject(err));
  //   })
  // }

  // getUserProfile(id) {
  //   return this.http.get(`${AppConfig.REST_API}/user/`+ id)
	// 	.map((res: any) => res)
  //   .toPromise();
  // }

  // updateUserProfile(user: User) {
  //   return new Promise ((resolve, reject) => {
  //     this.http.post(`${AppConfig.REST_API}/user/update`, user)
  //     .subscribe((res) => resolve(res), (err) => reject(err));
  //   })
  // }
}
