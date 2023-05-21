import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Cosmetic } from '../models/cosmetic';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CosmeticService {

  constructor(private _http: HttpClient) { }
  getProducts():Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const requestOptions: object =
    {
      headers: headers,
      responseType: 'text'
    };
    return this._http.get<any>('/cosmetics', requestOptions).pipe(
      map((res: string) => JSON.parse(res) as Array<Cosmetic>),
      retry(3),
      catchError(this.handleError))

  }
  addToCart(cart:Cart):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const requestOptions: object =
    {
      headers: headers,
      responseType: 'text'
    };
    return this._http.post<any>('/cart',{cart}, requestOptions).pipe(
      map((res: string) => JSON.parse(res) as Array<Cart>),
      retry(3),
      catchError(this.handleError))
  }

getCart(){
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  const requestOptions: object =
  {
    headers: headers,
    responseType: 'text'
  };
  return this._http.get<any>('/cart', requestOptions).pipe(
    map((res: string) => JSON.parse(res) as Array<Cart>),
    retry(3),
    catchError(this.handleError))

}
changeQuantity(cart:Cart):Observable<any>{
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  const requestOptions: object =
  {
    headers: headers,
    responseType: 'text'
  };
  return this._http.put<any>('/cart',{cart}, requestOptions).pipe(
    map((res: string) => JSON.parse(res) as Array<Cart>),
    retry(3),
    catchError(this.handleError))
}


  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }

}

