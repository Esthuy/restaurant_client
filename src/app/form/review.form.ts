import { AbstractControl, FormControl, ValidationErrors, Validators } from "@angular/forms";


export const REVIEW_INSERT_FORM = {
  
    'title': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50) , notBlank]), 
    'comment' : new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(200), notBlank]),
    'stars' : new FormControl(null, [Validators.required, max5Stars]),
    'user' : new FormControl(null),
    'restaurant' : new FormControl(null),

}; 

function notBlank(control : AbstractControl) : ValidationErrors | null {
    if( control.value == null || control.value == "" || control.value && control.value.trim() != "") 
        return null; 
    
    return {
        notBlank: {message : 'Ne peut pas être vide'}     
    }
}

function max5Stars(control : AbstractControl) : ValidationErrors | null {
    if( control.value == null || (control.value < 6 && control.value >= 0)) 
        return null; 

    return {
        max5Stars: {message : 'Mettez une note de 5 étoiles maximum'}     
    }
}
