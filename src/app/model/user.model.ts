import { Restaurant } from "./restaurant.model";
import { Review } from "./review.model";

export interface User{
    id : number; 
    name : string; 
    email : string;
    birthdate : Date; 
    reviews : Review[]; 
    favorites : Restaurant[]; 
}