import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-service-product-image-detail',
  templateUrl: './service-product-image-detail.component.html',
  styleUrls: ['./service-product-image-detail.component.css']
})
export class ServiceProductImageDetailComponent {
selectedProduct: any;
constructor(private activateRoute: ActivatedRoute, private _fs: ProductService,private router: Router)
{
  activateRoute.paramMap.subscribe(
    (param)=>{
      let id = param.get('id');
      if(id){
        this.selectedProduct = this._fs.getProductDetail(id);
      }
    }
  )
}
goBack(){
  this.router.navigate(['service-product-image-event']);
}
}
