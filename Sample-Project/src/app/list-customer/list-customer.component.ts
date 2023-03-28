import { Component } from '@angular/core';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent {
  customers = [
    {
      "Id": "Cus123",
      "Name": "First",
      "Email":"obama@gmail.com",
      "Age": 67,
      "Image": "assets/obama-avatar.png"
    },
    {
      "Id": "Cus456",
      "Name": "Second",
      "Email":"obonma@gmail.com",
      "Age": 45,
      "Image": "assets/obama-avatar.png"
    },
    {
      "Id": "Cus789",
      "Name": "Third",
      "Email":"obama@gmail.com",
      "Age": 77,
      "Image": "assets/obama-avatar.png"
    }
  ]

}
