import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../+shared/config';
import { AutoCompleteService } from 'ionic2-auto-complete';
import { Storage } from "@ionic/storage";
import 'rxjs/add/operator/map'

@Injectable()
export class AutocompleteproductService implements AutoCompleteService {
  labelAttribute = "name";
  constructor(private storage: Storage,
    private http: HttpClient) {

  }


  getResults(keyword: string) {
    keyword = keyword.toString()
    return this.storage.get('products').then((data) => {
      return data = data.filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()));
    })
  }

}
