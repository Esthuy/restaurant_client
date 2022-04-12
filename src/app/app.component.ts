import { Component } from '@angular/core';
import { Restaurant } from './model/restaurant.model';
import { RestaurantService } from './services/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'restaurant_client';

  restaurants: Restaurant[] = [];


  constructor(private service : RestaurantService) { 
    this.getRestaurants(); 
  }

  getRestaurants(){
    this.service.getRestaurants()
    .subscribe({
      next: restaurantsList => this.restaurants = restaurantsList,
      error: err => alert("echec"),
    });
  }



 
}
