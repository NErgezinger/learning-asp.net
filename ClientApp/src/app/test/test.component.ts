import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  weatherData: any = "test";
  index: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:5000/WeatherForecast').subscribe(data => {
      this.weatherData = data;
  })
  }

  changeDay(amount: number): void {
    this.index += amount;
  }

}
