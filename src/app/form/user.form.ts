import { AbstractControl, FormControl, ValidationErrors, Validators } from "@angular/forms";



export const USER_INSERT_FORM = {
    
    'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30) , notBlank]), 
    'email' : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30) , notBlank, Validators.email]),
    'birthdate' :  new FormControl(null, Validators.required), 
    'password': new FormControl(null, Validators.required)
}

function notBlank(control : AbstractControl) : ValidationErrors | null {
    if( control.value == null || control.value == "" || control.value && control.value.trim() != "") 
        return null; 
    
    return {
        notBlank: {message : 'Ne peut pas être vide'}     
    }
}



