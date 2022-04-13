import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../model/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private readonly BASE_URL = "http://localhost:8080/review";

  constructor(private client: HttpClient) { }

  // GET 
  getReviews(): Observable<Review[]>{
    return this.client.get<Review[]>(this.BASE_URL)
  }

  // GET ONE 
  getOneReview(id : number): Observable<Review>{
    return this.client.get<Review>(this.BASE_URL + "/" + id)
  }

  // POST
  createReview(review : Review){
    return this.client.post<Review>(this.BASE_URL + "/add" , review);
  }

  // DELETE
  deleteReview(id : number){
    return this.client.delete<Review>(this.BASE_URL + "/" + id)
  }
}
