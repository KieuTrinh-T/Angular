import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { ICustomerType } from '../interfaces/customerType';

@Injectable({
  providedIn: 'root'
})
export class Customer18Service {

  private _url:string = "../assets/data/customers.json"
  constructor(private _http: HttpClient) {
   }
  getCustomers(){
   return  this._http.get<ICustomerType[]>(this._url)
    .pipe(retry(3),catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
}
