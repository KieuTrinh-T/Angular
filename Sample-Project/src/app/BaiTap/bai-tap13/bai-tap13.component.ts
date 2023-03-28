import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-bai-tap13',
  templateUrl: './bai-tap13.component.html',
  styleUrls: ['./bai-tap13.component.css']
})
export class BaiTap13Component {
public products:any
constructor(pservice: ProductService, private router: Router){
  this.products = pservice.getProductWithImage();
}

viewDetail(f: any){
  this.router.navigate(['service-product-image-detail', f.productId])
}


}
