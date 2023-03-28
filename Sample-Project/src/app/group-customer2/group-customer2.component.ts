import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-group-customer2',
  templateUrl: './group-customer2.component.html',
  styleUrls: ['./group-customer2.component.css']
})
export class GroupCustomer2Component {
  database: any
  constructor(private customerService: CustomerService){
    this.database = customerService.getAllCustomer()
  }
}
