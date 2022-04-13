import { AbstractControl, FormControl, ValidationErrors, Validators } from "@angular/forms";



export const USER_INSERT_FORM = {
    
    'name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30) , notBlank]), 
    'email' : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30) , notBlank]),
    'birthdate' :  new FormControl(null, [birthdateBeforeToday]), 
}; 

function notBlank(control : AbstractControl) : ValidationErrors | null {
    if( control.value == null || control.value == "" || control.value && control.value.trim() != "") 
        return null; 
    
    return {
        notBlank: {message : 'Ne peut pas être vide'}     
    }
}

function birthdateBeforeToday(control : AbstractControl) : ValidationErrors | null {
    if( control.value.birthdate < Date.now )
       return null; 

    return {birthdateBeforeToday: {
        message: 'Date de naissance invalide'
        }
}

}