import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http:HttpClient) {}

  calculate(a,b){
    console.log('ตัวตั้ง', a, 'ตัวบวก', b);

    let url = "https://nextflow-node-calculator-api.azurewebsites.net/calculator/plus";
  }

}
