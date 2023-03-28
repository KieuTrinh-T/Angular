import { Component } from '@angular/core';

@Component({
  selector: 'app-bai-tap8',
  templateUrl: './bai-tap8.component.html',
  styleUrls: ['./bai-tap8.component.css']
})
export class BaiTap8Component {
public name:string = '';
public address:string = ''
setDefault(){
  this.address = '13 đường Hùng Vương'
}
}
