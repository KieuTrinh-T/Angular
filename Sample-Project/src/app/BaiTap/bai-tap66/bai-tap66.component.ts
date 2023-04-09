import { Component } from '@angular/core';
import {IUser} from 'src/app/interfaces/user'

@Component({
  selector: 'app-bai-tap66',
  templateUrl: './bai-tap66.component.html',
  styleUrls: ['./bai-tap66.component.css']
})
export class BaiTap66Component {
user:IUser={
  Name:'',
  Password: ''
}
submit(){
  console.log(this.user)
}
}
