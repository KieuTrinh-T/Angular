import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
myVar: string = 'Hello Angular'

getMyVar(type: string){
switch(type){
  case 'original':
    return this.myVar;
  case 'lowcase':
    return this.myVar.toLowerCase();
  case 'upcase':
    return this.myVar.toUpperCase();
  default:
    return this.myVar;
}
}
}
