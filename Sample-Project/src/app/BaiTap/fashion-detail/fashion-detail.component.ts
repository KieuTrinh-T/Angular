import { Component } from '@angular/core';
import { FashionApiService } from '../fashion-api.service';

@Component({
  selector: 'app-fashion-detail',
  templateUrl: './fashion-detail.component.html',
  styleUrls: ['./fashion-detail.component.css']
})
export class FashionDetailComponent {
public id: string = '';
public fashion?: any;
public errMessage?: string;
constructor(public _service: FashionApiService){

}
getFashionDetail()
{
  if(this.id != ''){
    this._service.getFashionDetail(this.id).subscribe({
      next:(data)=>{this.fashion=data},
      error:(err)=>{this.errMessage=err}

    })

  }
}

}
