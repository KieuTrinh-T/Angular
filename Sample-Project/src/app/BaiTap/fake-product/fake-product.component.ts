import { Component } from '@angular/core';
import { FakeProductService } from '../fake-product.service';

@Component({
  selector: 'app-fake-product',
  templateUrl: './fake-product.component.html',
  styleUrls: ['./fake-product.component.css']
})
export class FakeProductComponent {
  public data:any
  errMessage:string=''
  constructor(_service:FakeProductService){
  _service.getFakeProductData().subscribe({
  next:(data)=>{this.data = data,
  console.log(this.data)},
  error:(err)=>{
  this.errMessage=err
  }
  })
  console.log(this.data)
  }
}
