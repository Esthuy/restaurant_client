import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant.model';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent  {

  restaurants: Restaurant[] = [];


  constructor(private service : RestaurantService, private router : Router) { 
    this.getRestaurants(); 
  }

  getRestaurants(){
    this.service.getRestaurants()
    .subscribe({
      next: restaurantsList => this.restaurants = restaurantsList,
      error: err => alert("echec"),
    });
  }

  displayRestaurant(restaurant : Restaurant){
    this.router.navigate(['restaurant', restaurant.id]);
  }

}
