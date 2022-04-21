import { ReturnStatement } from '@angular/compiler';
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

  input: string = ""; 
  searchType: string = "name"; 
  orderStr: string = "asc";

  nbRestaurant: number = 0; 
  displayReset: boolean = false; 




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
        this.nbRestaurant = this.restaurants.length, 
        this.getStarAverage(); 
      },
      error: err => alert("echec"),
    });
  }

  getStarAverage(){
    this.restaurants.forEach( restaurant =>
      this.service.getStarAverage(restaurant.id).subscribe({
        next : average => restaurant.starAverage = average,
      }));
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
    if(this.input.trim() == ""){
      this.getRestaurants(); 
    } else {
      switch( this.searchType){
        case "name":{
          this.service.getByName(this.input).subscribe({
            next: restaurantsList => this.restaurants = restaurantsList,

            complete : () => {
              this.order(), 
              this.getStarAverage()

              if(this.restaurants.length < this.nbRestaurant){
                this.displayReset = true; 
              }else{
                this.displayReset = false; 
              }
            },

            error: err => alert("echec"),
          });

          break;
        }

        case "address": {
          this.service.getByAddress(this.input).subscribe({
            next: restaurantsList => this.restaurants = restaurantsList,

            complete : () => {
              this.order(),
              this.getStarAverage()

              if(this.restaurants.length < this.nbRestaurant){
                this.displayReset = true; 
              }
            },

            error: err => alert("echec"),
          });

          break; 
        }

        case "typeOfFood": {
          this.service.getByTypeOfFood(this.input).subscribe({
            next: restaurantsList => this.restaurants = restaurantsList,

            complete : () => {
              this.order(),
              this.getStarAverage()

              if(this.restaurants.length < this.nbRestaurant){
                this.displayReset = true; 
              }
            },

            error: err => alert("echec"),
          });

          break; 
        }
      }
    }
  }


  reset(){
    this.getRestaurants(); 
    this.displayReset = false; 
    this.input = ""; 
  }


  order(){
    if(this.orderStr === "desc"){
      this.restaurants = this.restaurants.sort((rest1, rest2) => rest2.name.localeCompare(rest1.name)); 
    } else if (this.orderStr ==="asc"){
      this.restaurants = this.restaurants.sort((rest1, rest2) => rest1.name.localeCompare(rest2.name)); 
    }else {
      this.restaurants = this.restaurants.sort((rest1, rest2) => rest2.starAverage - rest1.starAverage);
    }
  }


   

}
