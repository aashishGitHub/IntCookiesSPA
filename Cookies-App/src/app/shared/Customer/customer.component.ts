import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ICustomer } from './ICustomer';
import { CustomerService } from './customer.service';

@Component({
    selector: 'cookie-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
    errorMessage: string;
    selectedCustomerId: number;

    starWidth: number;
    @Output() customerSelected : EventEmitter<number> =
            new EventEmitter<number>(); 
  
    onSelect(customerId):void {
        this.selectedCustomerId = customerId;
        this.customerSelected.emit(this.selectedCustomerId);

        // this._customerService.getSelectedCustomer()
        // .subscribe(customers => {
        //     this.customer == customerId;
        // },
           // error => this.errorMessage = <any>error);
    }

    customers: ICustomer[] = [];

    constructor(private _customerService: CustomerService) {}
    ngOnInit(): void {
        this._customerService.getCustomers()
                .subscribe(customers => {
                    this.customers = customers;
                    //By default first customer is selected and passed to product list 
                    this.onSelect(customers[0].CustomerId);
                },
                    error => this.errorMessage = <any>error);
    }
    
}
