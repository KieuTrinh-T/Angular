import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsImage = [
    {
      "productId": 'p1',
      "productName": "Coca",
      "productPrice":100,
      "productImage": "/assets/coca.png"
    },{
      "productId": 'p2',
      "productName": "Pepsi",
      "productPrice":300,
      "productImage": "/assets/pepsi.png"
    },
    {
      "productId": 'p3',
      "productName": "Sting",
      "productPrice":200,
      "productImage": "/assets/sting.png"
    },]
  constructor() { }

  getProductWithImage(){
    return this.productsImage;
  }
  getProductDetail(id: any){
    return this.productsImage.find(product => product.productId == id);
  }
}
