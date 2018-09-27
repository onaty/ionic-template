

import { SettingPage } from './pages/setting/setting';
import { ProductService } from './services/product.service';

import { CustomerService } from './services/customer.service';
import { AutocompletesService } from './services/autocomplete.service';
import { AutocompleteproductService } from './services/autocompleteproduct.service';
import { AutocompletecatService } from './services/autocompletecat.service';
import { ItemslistPage } from '././pages/itemslist/itemslist';
import { SidebarPage } from './sidebar/sidebar';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { PageheaderPage } from './components/pageheader/pageheader';
import { SellproductPage } from './pages/sellproduct/sellproduct';
import { PrivateTemplate } from './private.template';

import { TransactionService } from './services/transaction.service';
import { AutocompletecustomerService } from './services/autocompletecustomer.service'
import { EditcustomerPage } from './modals/editcustomer/editcustomer';
import { CustomerslistPage } from './pages/customerslist/customerslist';


// import { Ng2CloudinaryModule } from 'ng2-cloudinary';
// import { FileUploadModule } from 'ng2-file-upload';
@NgModule({
  declarations: [
   
    SellproductPage,
    PageheaderPage,
    SidebarPage,
    ItemslistPage,
    PrivateTemplate,
    SettingPage,
    EditcustomerPage,
    CustomerslistPage,
   
  ],
  imports: [
    IonicModule,
    
    // Ng2CloudinaryModule, 
    // FileUploadModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
   
    SellproductPage,
    PageheaderPage,
   
    SidebarPage,
    ItemslistPage,
  
    PrivateTemplate,
    SettingPage,
  
    CustomerslistPage,
 
  ],
  providers: [
    ProductService,
    AutocompletesService,
    AutocompletecatService,
    AutocompleteproductService,
    CustomerService,
    TransactionService,
    AutocompletecustomerService,

  ]
})

export class PrivateModule { }
