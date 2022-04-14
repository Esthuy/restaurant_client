import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { REVIEW_INSERT_FORM } from 'src/app/form/review.form';
import { Restaurant } from 'src/app/model/restaurant.model';
import { Review } from 'src/app/model/review.model';
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
  reviewToDisplay! : Review; 
  username! : String; 

  reviewInsertForm : FormGroup; 
  reviewToAdd! : Review; 

  constructor(
     private service: RestaurantService, private userService: UserService, private reviewService : ReviewService,
     route: ActivatedRoute, builder: FormBuilder,
     private router: Router) {

    userService.obsUserIsConnected.subscribe(connected => this.connected = connected); 
    userService.obsUser.subscribe(username => this.username = username); 
    this.reviewInsertForm = builder.group(REVIEW_INSERT_FORM); 

    const param_id = route.snapshot.paramMap.get('id');
    this.id = param_id ? parseInt(param_id) : -1;

    if( this.id && this.id > 0 )
      service.getOneRestaurant(this.id).subscribe({
        next: (restaurant) => this.restaurant = restaurant,
        error: (err) => router.navigateByUrl('/restaurants')
      });
    
    }; 
   

    displayReview(review : Review){
      this.reviewService.getOneReview(review.id).subscribe({
        next : (review) => this.reviewToDisplay = review,
        error: (err) => this.router.navigateByUrl('/restaurants')
      })
    }

    return(){
      this.router.navigateByUrl('/restaurants');
    }


    addReview(){
      if(this.reviewInsertForm.valid){
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

    
      
      
  
  

  ngOnInit(): void {
  }


}