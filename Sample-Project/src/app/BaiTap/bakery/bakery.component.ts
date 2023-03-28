import { Component } from '@angular/core';
import { IBakery } from 'src/app/models/bakery';
import { BakeryService } from '../bakery.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent {

  bakeryList:any;
  errMessage:string='';
  rating:number=0;
  constructor(private _bakeryService: BakeryService) {
    this._bakeryService.getBakeries().subscribe(
      {
        next: (data: any) => { this.bakeryList = data },
        error: (err: any) => { this.errMessage = err }
      })
   }

  getListBakeryByRating() {
    this._bakeryService.getBakeryByRating(this.rating).subscribe(
      {
        next: (data: any) => { this.bakeryList = data },
        error: (err: any) => { this.errMessage = err }
      }
    )
  }

}
