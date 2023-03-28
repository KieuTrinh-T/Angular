import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry, throwError } from 'rxjs';
import { IPublicApi } from '../interfaces/publicApi';

@Injectable({
  providedIn: 'root'
})
export class PublicApiService {

  data: any
  public _url:string = "/entries"
  constructor(private _http: HttpClient) { }

  getPulicApiData(){
    const headers = new HttpHeaders().set("Content-Type","text/plainn;charset=utf-8")
    const requestOptions:Object = {
      headers:headers,
      reponseType: 'text'

    }
    return this._http.get<any>(this._url,requestOptions).pipe(
      map(res=>res['entries'] as IPublicApi[]),
      retry(3),
      catchError(this.handleError)
    )
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }

}
