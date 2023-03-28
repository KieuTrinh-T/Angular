import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookAPIService } from '../book-api.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent {
book=new Book();
books:any
errMessage:string=''
constructor(private _service: BookAPIService){
  this._service.getBooks().subscribe({
    next:(data)=>{this.books=data},
    error:(err)=>{this.errMessage=err}
  })
}

postBook(){
  if(!!this.book.BookId){
    console.log(this.book)
    this._service.postBook(this.book).subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage}
    })
  }

}

}
