import { Component } from '@angular/core';
import { Product15Service } from '../product15.service';

@Component({
  selector: 'app-bai-tap16',
  templateUrl: './bai-tap16.component.html',
  styleUrls: ['./bai-tap16.component.css']
})
export class BaiTap16Component {
products:any
errMessage:string=''
constructor(_service:Product15Service){
  _service.getProductHandleError().subscribe({
    next:(data)=>{this.products=data},
    error: (err)=>{this.errMessage=err}

  })
}
}
