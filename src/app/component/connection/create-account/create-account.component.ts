import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { USER_INSERT_FORM } from 'src/app/form/user.form';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  userInsertForm : FormGroup; 

  constructor(private service : UserService, private router : Router, builder: FormBuilder) { 
    this.userInsertForm = builder.group(USER_INSERT_FORM); 
  }

  userToAdd! : User; 


  onSubmit(){
    if(this.userInsertForm.valid){
      this.userToAdd = this.userInsertForm.value; 
      this.service.createUser(this.userToAdd).subscribe({
        complete: () => {
                  this.userInsertForm.reset();  
                  this.router.navigateByUrl('/homepage'); //Où rediriger ?? 
                },
        error: err => alert("echec"),
      }); 
    }
  }


}





