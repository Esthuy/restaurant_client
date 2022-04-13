import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant.model';
import { User } from 'src/app/model/user.model';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent  {

  restaurants: Restaurant[] = [];
  users: User[] = []; 


  constructor(private service : RestaurantService, private serviceUser : UserService ,private router : Router) { 
    this.getRestaurants(); 
    this.getUsers(); 
  }

  getRestaurants(){
    this.service.getRestaurants()
    .subscribe({
      next: restaurantsList => this.restaurants = restaurantsList,
      error: err => alert("echec"),
    });
  }

  getUsers(){
    this.serviceUser.getUsers()
    .subscribe({
      next: usersList => this.users = usersList, 
      error: err => alert("echec"),
    });
  }

  displayRestaurant(restaurant : Restaurant){
    this.router.navigate(['restaurant', restaurant.id]);
  }

  deleteRestaurant(restaurant: Restaurant){
    if(confirm("Êtes vous sur de vouloir supprimer ce restaurant ?")){
      this.service.deleteRestaurant(restaurant.id).subscribe({
        next: () => this.getRestaurants()
      }); 
    } ;
  }
}
