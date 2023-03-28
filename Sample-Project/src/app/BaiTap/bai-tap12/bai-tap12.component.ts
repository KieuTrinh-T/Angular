import { Component } from '@angular/core';

@Component({
  selector: 'app-bai-tap12',
  templateUrl: './bai-tap12.component.html',
  styleUrls: ['./bai-tap12.component.css']
})
export class BaiTap12Component {
data = [
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
  },
]
}
