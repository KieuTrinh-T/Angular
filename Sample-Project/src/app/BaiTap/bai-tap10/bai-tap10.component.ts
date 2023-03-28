import { Component } from '@angular/core';
import { Lunar, BlockLunarDate } from 'lunar-calendar-ts-vi';

@Component({
  selector: 'app-bai-tap10',
  templateUrl: './bai-tap10.component.html',
  styleUrls: ['./bai-tap10.component.css']
})
export class BaiTap10Component {
lunerDate!: BlockLunarDate;
public dateRange: any;
public monthRange: any;
public yearRange: any;


public date: number = 1;
public month: number = 1;
public year: number = 2023  ;

public solarDayStr: string = '';
public lunarDay: string = '';
public lunarMonthStr: string = '';
public lunarYearStr: string = '';
public lunarDateStr: string = '';
  constructor() {
    this.dateRange = Array(31).fill(0).map((_, i) => i + 1);
    this.monthRange = Array(12).fill(0).map((_, i) => i + 1);
    this.yearRange = Array(150).fill(0).map((_, i) => -i + 2023);

   }

  convertDate() {
    const lunar = new Lunar();
    this.lunerDate = lunar.getBlockLunarDate(this.year +'-' + this.month +'-' + this.date);

    console.log(this.lunerDate);
    this.solarDayStr = this.lunerDate.solarDayStr;
    this.lunarDay = this.lunerDate.lunarDate + '-' + this.lunerDate.lunarMonth + '-' + this.lunerDate.lunarYear;

    this.lunarMonthStr = this.lunerDate.lunarMonthStr;
    this.lunarYearStr = this.lunerDate.lunarYearStr;
    this.lunarDateStr = this.lunerDate.lunarDateStr;
  }

}
