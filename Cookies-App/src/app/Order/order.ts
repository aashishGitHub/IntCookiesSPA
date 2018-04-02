import { CheckType } from "@angular/core/src/view";
import { ICustomer } from "../shared/Customer/ICustomer"
import { IProduct } from "../products/product";

export class Order {
    CustomerId: number;
    OrderDetails:ProductClass[]   
}

export class ProductClass{
ProductId: number;
OrderQuantity: number;

}
