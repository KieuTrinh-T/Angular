import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IPublicApi } from 'src/app/interfaces/publicApi';
import { PublicApiService } from '../public-api.service';

@Component({
  selector: 'app-public-api',
  templateUrl: './public-api.component.html',
  styleUrls: ['./public-api.component.css']
})
export class PublicApiComponent {

  data: IPublicApi[] = []

  errMessage: string = ''
  constructor(private apiService: PublicApiService ) {
    apiService.getPulicApiData().subscribe({
      next:(data)=>{this.data = data},
      error:(err)=>{this.errMessage=err}
    })
  }


}
