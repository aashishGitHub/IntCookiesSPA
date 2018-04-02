import { CheckType } from "@angular/core/src/view";

export interface IProduct {
    ProductId: number;
    ProductName: string;
    Price: number;
    ProductStocksAvailable: number;
    OrderQuantity: number;
    ProductStocksDamage: number;
    IsOderPlaced: Boolean;    
}

