import { Component } from '@angular/core';
import { FashionApiService } from '../fashion-api.service';
@Component({
 selector: 'app-fashion',
 templateUrl: './fashion.component.html',
 styleUrls: ['./fashion.component.css']
})
export class FashionComponent {
 fashions:any;
 errMessage:string=''
 constructor(public _service: FashionApiService){
 this._service.getFashions().subscribe({
 next:(data)=>{this.fashions=data},
 error:(err)=>{this.errMessage=err}
 })
 }

 deleteItem(id:string){
  this._service.deleteFashion(id).subscribe({
    next:(data)=>{this.fashions=data},
    error:(err)=>{this.errMessage=err}
  })
  this.fashions=this.fashions.filter((item:any)=>item.id!=id)
}

}
