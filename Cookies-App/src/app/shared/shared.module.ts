import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './Customer/customer.component';
import { CustomerService } from './Customer/customer.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomerComponent
  ],
  exports: [
    CustomerComponent,
    CommonModule,
    FormsModule
  ],
  providers:[
    CustomerService
  ]
})
export class SharedModule { }
