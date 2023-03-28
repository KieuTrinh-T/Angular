import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-class-component',
  templateUrl: './binding-class-component.component.html',
  styleUrls: ['./binding-class-component.component.css']
})
export class BindingClassComponentComponent {
public success= 'text-success';
public error = 'text-error';
public primary = 'text-primary';
public normal = 'text-normal';
public multiClass={
  'text-normal': true,
  'text-error': true,
  'text-primary': true,
}
public complexity = 'text-complexity';
}
