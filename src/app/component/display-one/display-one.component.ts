import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant.model';
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

  constructor(
     private service: RestaurantService, private userService: UserService,
     route: ActivatedRoute, 
     private router: Router) {

    const param_id = route.snapshot.paramMap.get('id');
    this.id = param_id ? parseInt(param_id) : -1;

    if( this.id && this.id > 0 )
      service.getOneRestaurant(this.id).subscribe({
        next: (restaurant) => this.restaurant = restaurant,
        error: (err) => router.navigateByUrl('/restaurants')
      }); 

      userService.obsUser.subscribe(connected => this.connected = connected); 
    }; 
   


    addReview(){

    }
  

  ngOnInit(): void {
  }


}