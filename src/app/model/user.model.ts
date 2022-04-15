import { Restaurant } from "./restaurant.model";
import { Review } from "./review.model";

export interface User{
    id : number; 
    username : String; 
    email : String;
    birthdate : Date; 
    reviews : Review[]; 
    favorites : Restaurant[]; 
}