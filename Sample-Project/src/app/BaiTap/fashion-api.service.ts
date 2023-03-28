import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Fashion } from '../models/fashion';

@Injectable({
  providedIn: 'root'
})
export class FashionApiService {

  constructor(private _http: HttpClient) { }

  getFashions(): Observable<any>
{
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  const requestOptions:object =
  { headers: headers,
    responseType: 'text'
  };
  return this._http.get<any>('/fashions',requestOptions).pipe(
    map((res: string)=>JSON.parse(res) as Array<Fashion>),
    retry(3),
    catchError(this.handleError))
}
getFashionDetail(id: string){
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  const requestOptions:object =
  { headers: headers,
    responseType: 'text'
  };
  return this._http.get<any>('/fashions/' + id,requestOptions).pipe(
    map((res: string)=>JSON.parse(res) as Fashion),
    retry(3),
    catchError(this.handleError))
}

handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
  }
}
