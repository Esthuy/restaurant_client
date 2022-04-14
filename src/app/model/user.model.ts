import { Restaurant } from "./restaurant.model";
import { Review } from "./review.model";

export interface User{
    id : number; 
    username : string; 
    email : string;
    birthdate : Date; 
    reviews : Review[]; 
    favorites : Restaurant[]; 
}