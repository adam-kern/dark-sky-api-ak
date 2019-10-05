import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather'


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  public currWeather: CurrentWeather;
 

  constructor(private weatherService:WeatherService) {}

  ngOnInit() {
    this.weatherService.fetchWeather()
    .subscribe(data => {console.log(data.currently) 
      // console.log(data.currently.summary);
      // console.log(data.currently.temperature);
      // console.log(data.currently.precipProbability);
      // console.log(data.currently.windSpeed)});
      this.currWeather=data.currently
    })
  }

  getForecast() {
    console.log(this.weatherService.fetchWeather())
  }

}
