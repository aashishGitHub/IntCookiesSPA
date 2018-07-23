import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Customer } from 'src/app/customer-list/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpRequest } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerListService {
  customersChanged = new Subject<Customer[]>();

  newemployee:Observable<Customer[]>;

  private customers: Customer[] = [
    new Customer("1","ashish","9803676655","Bangalore")
  ];
 
  constructor(private httpClient: HttpClient) {}
  getEmployee()
  {
   return this.httpClient.get<Customer[]>('http://localhost:63581/api/CustomerApi')
  }
  addEmployee(customer: Customer) {
    // const req = new HttpRequest('POST', 'http://localhost:63581/api/CustomerApi',
    // customer);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    
    return this.httpClient.post<Customer>('http://localhost:63581/api/CustomerApi',customer,{headers})

    //return this.httpClient.request(req);

   // return this.http.post<employee>(ROOT_URL+'/Employees',emp,{headers})
  }
  setCustomers(customers: Customer[]) {
    this.customers = customers;
    this.customersChanged.next(this.customers.slice());
  }

  getCustomers() {
    this.httpClient.get<Customer[]>('http://localhost:63581/api/CustomerApi/data.json', {
      observe: 'body',
      responseType: 'json'
    })
    .map(
        (customers) => {debugger;
          console.log(customers);
          this.customers = customers;
          return customers;
        }
      )

   // return this.customers.slice();
  }

  getCustomer(index: number) {
    return this.customers[index];
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
    this.customersChanged.next(this.customers.slice());
  }

  updateCustomer(index: number, newCustomer: Customer) {
    this.customers[index] = newCustomer;
    this.customersChanged.next(this.customers.slice());
  }

  deleteRecipe(index: number) {
    this.customers.splice(index, 1);
    this.customersChanged.next(this.customers.slice());
  }
}
