import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapContainer } from './MapContainer/MapContainer.component';
import { WeatherComponent } from './weather/weather.component';



export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'map', component: MapContainer },
  { path: 'weather', component: WeatherComponent }
];
