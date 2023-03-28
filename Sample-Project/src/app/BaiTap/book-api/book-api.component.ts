import { Component } from '@angular/core';
import { BookAPIService } from '../book-api.service';

@Component({
  selector: 'app-book-api',
  templateUrl: './book-api.component.html',
  styleUrls: ['./book-api.component.css']
})
export class BookApiComponent {
  books:any;
  errMessage:string=''
  constructor(private _service: BookAPIService){
  this._service.getBooks().subscribe({
  next:(data)=>{this.books=data},
  error:(err)=>{this.errMessage=err}
  })
  }
}
