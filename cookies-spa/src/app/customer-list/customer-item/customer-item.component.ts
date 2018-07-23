import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Customer } from 'src/app/customer-list/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() customerItem : Customer;
  @Input() index : number;
  

}
