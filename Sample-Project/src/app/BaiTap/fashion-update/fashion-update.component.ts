import { Component } from '@angular/core';
import { Fashion } from 'src/app/models/fashion';
import { FashionApiService } from '../fashion-api.service';

@Component({
  selector: 'app-fashion-update',
  templateUrl: './fashion-update.component.html',
  styleUrls: ['./fashion-update.component.css']
})
export class FashionUpdateComponent {
  fashion = new Fashion();
  fashionList: Fashion[] = [];
  errMessage: string = ''
  constructor(private _service: FashionApiService) {

  }

  public setFashion(f: Fashion) {
    this.fashion = f
  }
  onFileSelected(event: any, fashion: Fashion) {
    let me = this;
    let file = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  updateFashion() {
    // console.log(JSON.stringify(this.fashion))

    this._service.putFashion(this.fashion).subscribe(
     { next: (data) => { console.log(data)},
     error: (err) => { this.errMessage = err,
    console.log(this.errMessage) }}
    )
  }
}
