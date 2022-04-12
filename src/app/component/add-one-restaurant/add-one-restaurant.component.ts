import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RESTAURANT_INSERT_FORM } from 'src/app/form/restaurant.form';
import { Restaurant } from 'src/app/model/restaurant.model';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-add-one-restaurant',
  templateUrl: './add-one-restaurant.component.html',
  styleUrls: ['./add-one-restaurant.component.css']
})
export class AddOneRestaurantComponent implements OnInit {

  restaurantInsertForm : FormGroup; 

  constructor(private service : RestaurantService, private router : Router, builder: FormBuilder) { 

    this.restaurantInsertForm = builder.group(RESTAURANT_INSERT_FORM); 
  }

  restaurantToAdd! : Restaurant; 


  onSubmit(){
    if(this.restaurantInsertForm.valid){
      this.restaurantToAdd = this.restaurantInsertForm.value; 
      this.service.createRestaurant(this.restaurantToAdd).subscribe(); 
      this.restaurantInsertForm.reset(); 
      this.service.getRestaurants; 
      this.router.navigateByUrl('/restaurants'); 
    }
  }; 


  ngOnInit(): void {
  }

}
