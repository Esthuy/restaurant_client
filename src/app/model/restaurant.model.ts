import { Review } from "./review.model";

export interface Restaurant {
    id: number;
    name: string;  
    description: string; 
    typeOfFood: string; 
    address: string; 
    phoneNumber: string; 
    reviews: Review[]; 

}