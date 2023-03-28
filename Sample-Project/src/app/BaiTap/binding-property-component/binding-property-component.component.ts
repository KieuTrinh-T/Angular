import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  // templateUrl: './binding-property-component.component.html',
  template:
  `<h1>Binding Property</h1>
  <div>Binding with [], result: <span [innerHTML]="name"></span></div>
  <div [hidden]="isDisabled">Binding with, result: {{email}}</div>`,
  styleUrls: ['./binding-property-component.component.css']

})
export class BindingPropertyComponentComponent {
 public name:string = "Trần Duy Thanh";
 public email:string = "thanhtd@uel.edu.vn";
 public nameid:string = "nameid";
  public emailid:string = "emailid";
  public isDisabled:boolean = true;
}
