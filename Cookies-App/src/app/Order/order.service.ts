import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json',
//       'Authorization': 'my-auth-token'
//     })

@Injectable()
export class OrderService {
    //private _orderApiUrl = 'http://localhost:63581/api/OrderApi';
    private _orderApiUrl = 'http://intcookieapi.azurewebsites.net/api/OrderApi';

    constructor(private _http: HttpClient) { }
   

    placeOrder(order): Observable<any> {debugger;
       return this._http.post<string>(
           this._orderApiUrl, 
           JSON.stringify(order)                   
        )
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse) {
        // in  real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}
