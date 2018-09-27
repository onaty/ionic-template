import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaleshistoryPage } from './saleshistory';

@NgModule({
  declarations: [
    SaleshistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SaleshistoryPage),
  ],
})
export class SaleshistoryPageModule {}
