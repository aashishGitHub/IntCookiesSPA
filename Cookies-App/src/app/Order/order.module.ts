import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from './order.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
      CommonModule,
    FormsModule
  ],
  providers:[
    OrderService
  ]
})
export class OrderModule {}
