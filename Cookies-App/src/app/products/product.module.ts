import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'products', component: ProductListComponent }        
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    ProductService,
  ]
})
export class ProductModule { }
