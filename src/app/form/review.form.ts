import { AbstractControl, FormControl, ValidationErrors, Validators } from "@angular/forms";


export const REVIEW_INSERT_FORM = {
  
    'title': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50) , notBlank]), 
    'comment' : new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(200), notBlank]),
    'stars' : new FormControl(null, Validators.required),
    'user' : new FormControl(null, Validators.required),
    'restaurant' : new FormControl(null, Validators.required),

}; 

function notBlank(control : AbstractControl) : ValidationErrors | null {
    if( control.value == null || control.value == "" || control.value && control.value.trim() != "") 
        return null; 
    
    return {
        notBlank: {message : 'Ne peut pas être vide'}     
    }
}
