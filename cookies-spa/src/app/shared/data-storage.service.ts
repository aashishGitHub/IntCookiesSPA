import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';
import { Customer } from 'src/app/customer-list/customer';
import { CustomerListService } from 'src/app/customer-list/customer-list.service';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient,
    private customerListService: CustomerListService,
  ) { }


  getCustomers() {debugger;
    this.httpClient.get<Customer[]>('http://localhost:63581/api/CustomerApi', {
      observe: 'body',
      responseType: 'json'
    })
    .map(
        (customers) => {
          console.log(customers);
          
          return customers;
        }
      )
      .subscribe(
        (customers: Customer[]) => {
          this.customerListService.setCustomers(customers);
        }
      );
  }
}
