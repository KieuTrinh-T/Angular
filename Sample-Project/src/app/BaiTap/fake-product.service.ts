import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IFakeProduct } from '../interfaces/fakeProduct';

@Injectable({
  providedIn: 'root'
})
export class FakeProductService {

  data:any
  private _url: string = "/products"
  constructor(private _http: HttpClient) {

   }
   getFakeProductData():Observable<any>{
    const headers = new HttpHeaders().set("Content-Type","text/plainn;charset=utf-8")
    const requestOptions:Object = {
      headers:headers,
      reponseType: 'text'

    }
    return this._http.get<any>(this._url,requestOptions).pipe(
      map(res=>
        res
      ),
      retry(3),

      catchError(this.handleError)
    )
   }
   handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
    }
}
