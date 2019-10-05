import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentWeather } from './current-weather'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 
  apiURL = `https://api.darksky.net/forecast/483240c9459fe04e0b48c9cc8751a572/`
  jerusalemURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/483240c9459fe04e0b48c9cc8751a572/31.7683,35.2137`

  
  constructor(private http: HttpClient) { }

  fetchWeather() {
   return this.http.get<CurrentWeather>(this.jerusalemURL)
  }

}
