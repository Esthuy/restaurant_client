import { Restaurant } from "./restaurant.model";
import { User } from "./user.model";

export interface Review{
    id : number; 
    user : User; 
    restaurant : Restaurant; 
    title : string; 
    comment : string; 
    stars : number; 
}