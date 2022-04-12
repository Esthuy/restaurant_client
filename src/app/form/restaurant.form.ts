import { AbstractControl, FormControl, ValidationErrors, Validators } from "@angular/forms";




export const RESTAURANT_INSERT_FORM = {
    'name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30) , notBlank]), 
    'description': new FormControl(null, [Validators.minLength(1), Validators.maxLength(100), notBlank]),
    'typeOfFood': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), notBlank]), 
    'address': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(100), notBlank]),
    'phoneNumber': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20), notBlank]),
};


function notBlank(control : AbstractControl) : ValidationErrors | null {
    if( control.value == null || control.value == "" || control.value && control.value.trim() != "") 
        return null; 
    
    return {
        notBlank: {message : 'Ne peut pas être vide'}     
    }
}

