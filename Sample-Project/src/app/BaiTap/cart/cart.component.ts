import { Component } from '@angular/core';
import { Cosmetic } from 'src/app/models/cosmetic';
import { CosmeticService } from '../cosmetic.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  data:any

  constructor(public _service:CosmeticService){
    this._service.getCart().subscribe({
      next:(data)=>{this.data=data}
    })

  }
}
