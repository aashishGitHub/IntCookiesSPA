import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Customer } from 'src/app/customer-list/customer';
import { CustomerListService } from 'src/app/customer-list/customer-list.service';
import { ViewChild } from '@angular/core/src/metadata/di';
import { ElementRef } from '@angular/core/src/linker/element_ref';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: Customer[];
  subscription: Subscription;
  DummyCustomer:Customer;
   Name: string;
   Phone: string;  
  Address: string;
  

  constructor(private customerService: CustomerListService) {
}

  ngOnInit() {
    // this.subscription = this.customerService.customersChanged
    //   .subscribe(
    //     (customers: Customer[]) => {
    //       this.customers = customers;
    //     }
    //   );
    //   debugger;
    // var ss = this.customerService.getCustomers();
    // console.log(ss      );
    this.customerService.getEmployee().subscribe((tempdate) =>{  this.customers=tempdate;})
    ,err=>{
      console.log(err);
    }
  }
  addCustomers(){debugger;
    const customer = new Customer("id",this.Name, 
    this.Phone, this.Address);

    this.customerService.addEmployee(this.DummyCustomer).subscribe(res=>
      {
        this.customers.push(res);
        alert("Data added successfully !! ")
        //this.editCustomer=false;
      })
      ,err=>
      {
        console.log("Error Occured " + err);
      }
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

}
