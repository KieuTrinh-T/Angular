import { Component } from '@angular/core';
import { BookAPIService } from '../book-api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
book:any;
errMessage:string=''
constructor(private _service: BookAPIService){
}
searchBook(id:string){
this._service.getBook(id).subscribe({
next:(data)=>{this.book=data},
error:(err)=>{this.errMessage=err}
})
}
}
