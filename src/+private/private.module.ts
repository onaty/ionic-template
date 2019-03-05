
import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import { HomePage } from './pages/home/home';
import { PrivatetabPage } from './pages/privatetab/privatetab';
import { SettingsPage } from './pages/settings/settings';
import { TransactionsPage } from './pages/transactions/transactions';

// import { HeaderComponent } from "./components/header/header";

// Pages Start
// Pages End


// Services Start


//  Services End


@NgModule({
  declarations: [
    HomePage,
    PrivatetabPage,
    SettingsPage,
    TransactionsPage
  ],
  imports: [
    IonicModule,
  ],
  bootstrap:[IonicApp],
  entryComponents: [
    HomePage,
    PrivatetabPage,
    SettingsPage,
    TransactionsPage
  ],
  providers: [

  ]
})

export class PrivateModule {}
