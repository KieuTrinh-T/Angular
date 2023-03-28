import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-bai-tap7',
  templateUrl: './bai-tap7.component.html',
  styleUrls: ['./bai-tap7.component.css']
})
export class BaiTap7Component {
public a: number = 0;
public b: number = 0;
public result: number = 0;
onClick(event:any){
  alert(event.pointerId)
}
onSubmit(value:any){
  alert(value)
}
setValues(a:string,b:string){
  this.a = parseInt(a);
  this.b = parseInt(b);
}
calculate(type:string): void{
switch(type){
  case 'plus':
    this.result = this.a + this.b;
    break;
  case 'minus':
    this.result = this.a - this.b;
    break;
  case 'multiply':
    this.result = this.a * this.b;
    break;
  case 'divide':
    if(this.b==0){
      alert("Không thể chia cho 0")
    }
    else{
      this.result = this.a / this.b;
    }
    break;
  default:
    this.result = 0;
    break;
}}

plus(a: string,b:string){
  this.a = parseInt(a);
  this.b = parseInt(b);
  alert( this.a + this.b);
}
minus(a: string,b:string){
  this.a = parseInt(a);
  this.b = parseInt(b);
  alert( this.a - this.b);}

multiply(a: string,b:string){
  this.a = parseInt(a);
  this.b = parseInt(b);
  alert( this.a * this.b);}

divide(a: string,b:string){
  this.a = parseInt(a);
  this.b = parseInt(b);
  if(this.b==0){
    alert("Không thể chia cho 0")
  }
  alert( this.a/this.b)}
clear(){
  this.a = 0;
  this.b = 0;
}
}
