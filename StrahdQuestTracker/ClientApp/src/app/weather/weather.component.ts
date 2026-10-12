import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
  private http = inject(HttpClient);
  public forecasts: WeatherForecast[] = [];

  ngOnInit() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe({
      next: (result) => {
        this.forecasts = result;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
