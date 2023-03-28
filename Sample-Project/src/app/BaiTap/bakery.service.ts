import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry, throwError } from 'rxjs';
import { IBakery } from '../models/bakery';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {

  constructor(private _http: HttpClient) { }
  getBakeryByRating(rating: number): any {
   const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/bakeries/" + rating, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<IBakery>),
      retry(3),
      catchError(this.handleError))

  }
  getBakeries(): any {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/bakeries", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<IBakery>),
      retry(3),
      catchError(this.handleError))
    }



  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
    }

}
