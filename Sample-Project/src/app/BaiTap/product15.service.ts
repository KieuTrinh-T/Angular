import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product15Service {

  private _url:string="../assets/data/productsX.json";

  constructor(private _http: HttpClient) { }
  getProduct():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._url)
  }
  getProductHandleError(){
    return this._http.get<IProduct[]>(this._url)
      .pipe(retry(3),
      catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
}
