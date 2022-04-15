import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../model/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  private readonly BASE_URL = "http://localhost:8080/restaurant";

  constructor(private client: HttpClient) { }

  // GET 
  getRestaurants(): Observable<Restaurant[]>{
    return this.client.get<Restaurant[]>(this.BASE_URL)
  }

  // GET ONE 
  getOneRestaurant(id : number): Observable<Restaurant>{
    return this.client.get<Restaurant>(this.BASE_URL + "/" + id)
  }

  // POST
  createRestaurant(restaurant : Restaurant){
    return this.client.post<Restaurant>(this.BASE_URL + "/add" , restaurant);
  }

  // DELETE
  deleteRestaurant(id : number){
    return this.client.delete<Restaurant>(this.BASE_URL + "/" + id)
  }

  // PUT 
  updateRestaurant(id : number, restaurant : Restaurant){
    return this.client.put<Restaurant>(this.BASE_URL + "/" + id, restaurant)
  }
  
}
