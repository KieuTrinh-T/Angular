import { Component } from '@angular/core';
import { IBitCoin } from 'src/app/interfaces/bitcoin';
import { IBPI } from 'src/app/interfaces/bpi';
import { BitCoinService } from '../bit-coin.service';

@Component({
  selector: 'app-bit-coin',
  templateUrl: './bit-coin.component.html',
  styleUrls: ['./bit-coin.component.css']
})
export class BitCoinComponent {
  public bpi: IBPI = {}

  bpiData: Array<IBitCoin> = []
  public data: Array<IBitCoin> = []
  errMessage:string=''
  constructor(_service:BitCoinService){
  _service.getBitCoinData().subscribe({
  next:(data)=>{
    this.bpi = data,
    this.data = Object.values(this.bpi),

    console.log('this ' + this.data[0].code)},
  error:(err)=>{
  this.errMessage=err
  }
  })
  }
}
