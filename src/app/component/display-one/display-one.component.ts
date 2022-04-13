import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant.model';
import { Review } from 'src/app/model/review.model';
import { RestaurantService } from 'src/app/services/restaurant.service';
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
  reviews : Review[] = []; 

  constructor(
     private service: RestaurantService, private userService: UserService,
     route: ActivatedRoute, 
     private router: Router) {

    userService.obsUser.subscribe(connected => this.connected = connected); 

    const param_id = route.snapshot.paramMap.get('id');
    this.id = param_id ? parseInt(param_id) : -1;

    if( this.id && this.id > 0 )
      service.getOneRestaurant(this.id).subscribe({
        next: (restaurant) => this.restaurant = restaurant,
        error: (err) => router.navigateByUrl('/restaurants')
      });
    
    }; 
   
    //Comment faire dans le constructeur ? 
    getReviews(){
      this.reviews = this.restaurant.reviews; 
    }


    addReview(){

    }
  

  ngOnInit(): void {
  }


}