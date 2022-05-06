import { Component } from '@angular/core';
import { MainServiceService } from './main-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){  }

  ngOnInit(): void {

  }
  listPhone = [
    {id:1,name: 'Iphone 6', price : 100 , amount : 5},
    {id:2,name: 'Iphone 13', price : 200 , amount : 10},
    {id:3,name: 'SamSung s10', price : 100 , amount : 11},
    {id:4,name: 'SamSung s20', price : 200 , amount : 2},
    {id:5,name: 'Xiaomi note8', price : 100 , amount : 5},
  ]

  inforPhone:any = {}
  getInfor(data:any){
    this.inforPhone = data
  }
}
