import { Component } from '@angular/core';
import { Product15Service } from '../product15.service';

@Component({
  selector: 'app-bai15',
  templateUrl: './bai15.component.html',
  styleUrls: ['./bai15.component.css']
})
export class Bai15Component {
products:any;
constructor(private _service: Product15Service) {
  this._service.getProduct().subscribe({
    next: (data)=>{this.products=data}
  })
}
}
