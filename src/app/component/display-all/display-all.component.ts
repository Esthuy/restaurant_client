import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant.model';
import { Review } from 'src/app/model/review.model';
import { User } from 'src/app/model/user.model';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ReviewService } from 'src/app/services/review.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent  {

  restaurants: Restaurant[] = [];
  users: User[] = []; 
  reviews: Review[] =[]; 
  restaurantName: string = ""; 
  nbRestaurant: number = 0; 
  displayReset: boolean = false; 
  orderStr: string = "asc";



  constructor(private service : RestaurantService, private serviceUser : UserService ,private serviceReview : ReviewService ,private router : Router) { 
    this.getRestaurants(); 
    this.getUsers(); 
    this.getReviews(); 
  }

  getRestaurants(){
    this.service.getRestaurants()
    .subscribe({
      next: restaurantsList => this.restaurants = restaurantsList,
      complete: () => {
        this.order(),
        this.nbRestaurant = this.restaurants.length
      },
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

  getReviews(){
    this.serviceReview.getReviews()
    .subscribe({
      next: reviewList => this.reviews = reviewList, 
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

  addOneRestaurant(){
    this.router.navigateByUrl("/add"); 
  }

  search(){
    if(this.restaurantName.trim() == ""){
      this.getRestaurants(); 
    } else {
      this.service.getByName(this.restaurantName).subscribe({
        next: restaurantsList => this.restaurants = restaurantsList,
        complete : () => {
          this.order()
          if(this.restaurants.length < this.nbRestaurant){
            this.displayReset = true; 
          }
        },
        error: err => alert("echec"),
      });
    }
  }

  reset(){
    this.getRestaurants(); 
    this.displayReset = false; 
  }

  order(){
    if(this.orderStr === "desc"){
      this.restaurants = this.restaurants.sort((resto1, resto2) => resto2.name.localeCompare(resto1.name)); 
    } else {
      this.restaurants = this.restaurants.sort((resto1, resto2) => resto1.name.localeCompare(resto2.name)); 
    }
  }

}
