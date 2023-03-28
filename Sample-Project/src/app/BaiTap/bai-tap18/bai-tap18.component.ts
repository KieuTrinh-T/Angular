import { Component } from '@angular/core';
import { Customer18Service } from '../customer18.service';

@Component({
  selector: 'app-bai-tap18',
  templateUrl: './bai-tap18.component.html',
  styleUrls: ['./bai-tap18.component.css']
})
export class BaiTap18Component {
customerTypes: any
err: any
constructor(private _service: Customer18Service ){
  this._service.getCustomers().subscribe({
    next: (data)=>{this.customerTypes = data}
  })
}
}
