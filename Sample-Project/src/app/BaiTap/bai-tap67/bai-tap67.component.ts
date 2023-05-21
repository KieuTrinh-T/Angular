import { Component } from '@angular/core';
import { FashionApiService } from '../fashion-api.service';
import { CosmeticService } from '../cosmetic.service';
import { Cosmetic } from 'src/app/models/cosmetic';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-bai-tap67',
  templateUrl: './bai-tap67.component.html',
  styleUrls: ['./bai-tap67.component.css']
})
export class BaiTap67Component {
  data:any;
  errMessage:string=''
  cart:any
  constructor(public _service: CosmeticService){
  this._service.getProducts().subscribe({
  next:(data)=>{this.data=data},
  error:(err)=>{this.errMessage=err}
  })
  }
  addToCart(product:Cosmetic){
    const cart:Cart = {
      Product: product,
      Quantity:1
    }
    this._service.addToCart(cart).subscribe({
      next:(data)=>{this.cart=data},
      error:(err)=>{this.errMessage=err}
    })



  }



}
