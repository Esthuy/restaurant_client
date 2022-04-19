import { Restaurant } from "./restaurant.model";
import { Review } from "./review.model";

export interface User{
    id : number; 
    username : string | null; 
    email : String;
    birthdate : Date; 
    reviews : Review[]; 
    favorites : Restaurant[]; 
}