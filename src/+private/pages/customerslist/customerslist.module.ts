import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerslistPage } from './customerslist';

@NgModule({
  declarations: [
    CustomerslistPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerslistPage),
  ],
})
export class CustomerslistPageModule {}
