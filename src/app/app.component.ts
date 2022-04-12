import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from './model/restaurant.model';
import { RestaurantService } from './services/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'restaurant_client';
  

}
