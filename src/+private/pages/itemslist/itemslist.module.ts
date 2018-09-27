import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemslistPage } from './itemslist';

@NgModule({
  declarations: [
    ItemslistPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemslistPage),
  ],
})
export class ItemslistPageModule {}
