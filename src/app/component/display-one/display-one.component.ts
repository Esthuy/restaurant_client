import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { REVIEW_INSERT_FORM } from 'src/app/form/review.form';
import { Restaurant } from 'src/app/model/restaurant.model';
import { Review } from 'src/app/model/review.model';
import { User } from 'src/app/model/user.model';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ReviewService } from 'src/app/services/review.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-one',
  templateUrl: './display-one.component.html',
  styleUrls: ['./display-one.component.css']
})
export class DisplayOneComponent implements OnInit {

  restaurant! : Restaurant;  
  id : number; 
  connected! : boolean; 
  favorite! : boolean; 
  reviewToDisplay! : Review |undefined; 
  username! : string | null; 

  reviewInsertForm : FormGroup; 
  reviewToAdd! : Review; 

  user! : User; 

  constructor(
     private restaurantService: RestaurantService, private userService: UserService, private reviewService : ReviewService,
     route: ActivatedRoute, builder: FormBuilder,
     private router: Router) {

    userService.obsUserIsConnected.subscribe(connected => this.connected = connected); 
    userService.obsUser.subscribe(username => this.username = username); 
    this.reviewInsertForm = builder.group(REVIEW_INSERT_FORM); 

    const param_id = route.snapshot.paramMap.get('id');
    this.id = param_id ? parseInt(param_id) : -1;

    if( this.id && this.id > 0 )
      restaurantService.getOneRestaurant(this.id).subscribe({
        next: (restaurant) => this.restaurant = restaurant,
        error: (err) => router.navigateByUrl('/restaurants'), 
        complete : () => this.ifFavoriteOf(),
      });
 
   
  }
   

    displayReview(review : Review){
      this.reviewService.getOneReview(review.id).subscribe({
        next : (review) => this.reviewToDisplay = review,
        error: (err) => this.router.navigateByUrl('/restaurants')
      })
    }

    hideReview(){
      this.reviewToDisplay = undefined; 
    }

    return(){
      this.router.navigateByUrl('/restaurants');
    }

       
    //If the user is connected, check if the restaurant is already in the user favorites list
    ifFavoriteOf(){
      if(this.connected){
        
        if(this.restaurant.favoriteOf.find((user) => user.username == this.username) != null){
         
          this.favorite = true; 
        }
      }
    }


    connection(){
      this.router.navigateByUrl('/connection'); 
    }

    addReview(){
      if(this.reviewInsertForm.valid && this.username != null ){
        this.reviewToAdd = this.reviewInsertForm.value; 
        this.reviewToAdd.restaurant = this.restaurant; 
        
        this.userService.getOneByUsername(this.username).subscribe({
          next : (user) => this.reviewToAdd.user = user,
          complete : () => this.reviewService.createReview(this.reviewToAdd).subscribe({
              next: () => {
                this.reviewInsertForm.reset();  
              },
              error: err => alert("echec"),
            }),
        }); 
    }
    }



  addToFavorites(){
    if(this.username != null)
      this.userService.getOneByUsername(this.username).subscribe({
        next : (user) => {
          this.user = user,
          this.restaurant.favoriteOf.push(this.user),
          this.restaurantService.updateRestaurant(this.restaurant.id, this.restaurant).subscribe({
            next : (restaurant) => this.restaurant = restaurant,
            complete : () => {
                alert("Le restaurant a bien été ajouté à vos favoris");
                this.favorite = true; 
          }
          });
      },
        error : err => alert("echec"),
      })
  }

    
      
      
  
  

  ngOnInit(): void {
  }


}