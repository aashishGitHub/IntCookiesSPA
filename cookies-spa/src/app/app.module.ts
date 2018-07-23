import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
//import { CustomerItemComponent } from './customer-list/customer-item/customer-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent
   // CustomerItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
