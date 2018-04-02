import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Order, ProductClass } from '../Order/order';
import {OrderService } from '../Order/order.service'

import { Type } from '@angular/core/src/type';

class MyClass {
    CustomerId: number;
    OrderDetails:ProductClass[]  
}

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    customerId: number;  
    customerMessage: string; 
    constructor(private _productService: ProductService, private _orderService: OrderService ) {}
     
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    onCustomerSelected(id: number): void {
        setTimeout(() => {             
            this.customerMessage = ''; 
        }, 700);
        this.customerMessage = 'The selected customer id :' + id;          
        this.customerId= id;
    } 

    OrderDetails : any[];
    newOrder: any = {
        customerId: '',
        OrderDetails: []
    }
    onPlaceOrder (procucts: IProduct[]): void {   
    var i: number = 0;  
    this.OrderDetails = [];
        for (let item of this.products) 
        {         
           if(item.IsOderPlaced && item.OrderQuantity>0)
           {
            this.OrderDetails.push(
                {
                    "ProductId":item.ProductId,
                    "Quantity":item.OrderQuantity
                });                
            }
        }
        
        this.newOrder.customerId = this.customerId;
        this.newOrder.OrderDetails = JSON.stringify(this.OrderDetails);
            
        if( this.OrderDetails.length <1)  alert("Please select product and quantity");
        console.log(this.newOrder);    
            this._orderService.placeOrder(this.newOrder);            
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.ProductName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    
    ngOnInit(): void {        
        this._productService.getProducts()
                .subscribe(products => {
                    this.products = products;
                    this.filteredProducts = this.products;
                },
                    error => this.errorMessage = <any>error);
    }
}