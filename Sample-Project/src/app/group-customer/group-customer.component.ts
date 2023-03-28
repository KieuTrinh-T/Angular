import { Component } from '@angular/core';

@Component({
  selector: 'app-group-customer',
  templateUrl: './group-customer.component.html',
  styleUrls: ['./group-customer.component.css']
})
export class GroupCustomerComponent {
  database = [
    {"CustomerTypeId":1, "CustomerTypeName":"VIP",
      "Customers":[
        {
          "Id": "Cus123",
          "Name": "First",
          "Email":"first@gmail.com",
          "Age": 67,
          "Image": "assets/obama-avatar.png"
        },
        {
          "Id": "Cus456",
          "Name": "Second",
          "Email":"second@gmail.com",
          "Age": 67,
          "Image": "assets/obama-avatar.png"
        },{
          "Id": "Cus789",
          "Name": "Third",
          "Email":"Third@gmail.com",
          "Age": 67,
          "Image": "assets/obama-avatar.png"
        },
      ]},
    {"CustomerTypeId":2, "CustomerTypeName":"Normal",
      "Customers":[
        {
          "Id": "Cus234",
          "Name": "Fourth",
          "Email":"fourth@gmail.com",
          "Age": 67,
          "Image": "assets/obama-avatar.png"
        },
        {
          "Id": "Cus567",
          "Name": "Fifth",
          "Email":"fifth@gmail.com",
          "Age": 67,
          "Image": "assets/obama-avatar.png"

        }
      ]}

  ]

}
