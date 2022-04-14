import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { USER_INSERT_FORM } from 'src/app/form/user.form';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInsertForm : FormGroup; 


  @Output('return')
  returnEmit = new EventEmitter(); 


  constructor(private service : UserService, private router : Router, builder: FormBuilder) { 
    this.userInsertForm = builder.group(USER_INSERT_FORM); 
  } 

  onSubmit(){}

  ngOnInit(): void {
  }

  return(){
    this.returnEmit.emit(); 
  }

}
