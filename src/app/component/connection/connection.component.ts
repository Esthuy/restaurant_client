import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant.model';
import { User } from 'src/app/model/user.model';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ReviewService } from 'src/app/services/review.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private userService : UserService, private restaurantService : RestaurantService , private reviewService : ReviewService,
    private router : Router ) {
    userService.obsUserIsConnected.subscribe(connected => this.connected = connected); 
    userService.obsUser.subscribe(username => {
      this.username = username;
      if(this.connected){
        this.getInfoUser(); 
      }
    }); 
   }

  connected!: boolean;
  connection: boolean = false; 
  createAccount: boolean = false;
  displayInfo: boolean = false; 

  username! : string | null;  
  user!: User; 
  restaurant! : Restaurant;

   

  login(){
    this.connection = true; 
  }

  createUser(){
    this.createAccount = true; 
  }

  hideLogin(){
    this.connection = false; 
  }

  hideCreateAccount(){
    this.createAccount = false; 
  }

  ngOnInit(): void {
  }

  getInfoUser(){
    if(this.username != null){ 
      this.userService.getOneByUsername(this.username).subscribe({
        next : (user) => this.user = user,
        complete : () => this.displayInfo = true,
      })
    }
  
  }

  restaurants(){
    this.router.navigateByUrl('/restaurants'); 
  }

  deleteFavorite(id : number){
    this.restaurantService.getOneRestaurant(id).subscribe({
      next : (restaurant) => this.restaurant = restaurant,
      complete : () => {
        const indexFav = this.restaurant.favoriteOf.findIndex((user) => this.user = user); 
        this.restaurant.favoriteOf.splice(indexFav); 
        this.restaurantService.updateRestaurant(this.restaurant.id, this.restaurant).subscribe({
                   next : (restaurant) => this.restaurant = restaurant,
                   complete : () =>  this.getInfoUser(), 
                });
      },
    })
  }

  deleteReview(id : number){
    this.reviewService.deleteReview(id).subscribe({
      complete : () =>  this.getInfoUser(),
    });
  }

  goToRestaurant(id : number){
    this.router.navigate(['restaurant', id]);
  }

  disconnection(){
    this.userService.disconnection(); 
    this.displayInfo = false; 
  }

}
