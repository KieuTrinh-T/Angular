import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IBitCoin } from '../interfaces/bitcoin';
import { IBPI } from '../interfaces/bpi';

@Injectable({
  providedIn: 'root'
})
export class BitCoinService {

  data:any
  private _url: string = "/v1/bpi/currentprice.json"
  constructor(private _http: HttpClient) {

   }
   getBitCoinData():Observable<any>{
    const headers = new HttpHeaders().set("Content-Type","text/plainn;charset=utf-8")
    const requestOptions:Object = {
      headers:headers,
      reponseType: 'text'

    }
    return this._http.get<any>(this._url,requestOptions).pipe(
      map(res=> res['bpi'] as IBPI
      ),
      retry(3),

      catchError(this.handleError)
    )
   }
   handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))

    }
}
