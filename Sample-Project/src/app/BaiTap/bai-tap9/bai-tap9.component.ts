import { Component } from '@angular/core';

@Component({
  selector: 'app-bai-tap9',
  templateUrl: './bai-tap9.component.html',
  styleUrls: ['./bai-tap9.component.css']
})
export class BaiTap9Component {
public a: number = 0;
public b: number = 0;
public c: number = 0;
public x1: number = 0;
public x2: number = 0;
public noti: string = "";

findSolution(){
  let delta = this.b * this.b - 4 * this.a * this.c;
  if(delta < 0){
    this.noti = "Phuong trinh vo nghiem";
  }else if(delta == 0){
    this.x1 =   + (-this.b / (2 * this.a));
    this.x2 = this.x1;
    this.noti = "Phuong trinh co nghiem kep, x1 = x2 = " + this.x1;
  }else{
    this.x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
    this.x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
    this.noti = "x1 = " + this.x1 + " va x2 = " + this.x2;
  }
}
}
