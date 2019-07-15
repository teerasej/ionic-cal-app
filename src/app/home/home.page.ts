import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  result = 0;

  constructor(private http:HttpClient) {}

  async calculate(a,b) {
    console.log('ตัวตั้ง', a, 'ตัวบวก', b);

    let first = parseInt(a);
    let second = parseInt(b);

    let url = "https://nextflow-node-calculator-api.azurewebsites.net/calculator/plus";

    let response = await<any> this.http.post(url, { "first" : first, "second": second }).toPromise();
    console.log(response);

    this.result = response.result;
  }

}
