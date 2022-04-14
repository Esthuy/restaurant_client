import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private service : UserService) {
    service.obsUserIsConnected.subscribe(connected => this.connected = connected); 
    service.obsUser.subscribe(username => this.username = username); 
   }

  connected!: boolean;
  connection: boolean = false; 
  createAccount: boolean = false;
  displayInfo: boolean = false; 

  username! : String;  
  user!: User; 

   

  login(){
    this.connection = true; 
  }

  createUser(){
    this.createAccount = true; 
  }

  hideLogin(){
    this.connection = false; 
  }

  hideCreateAccount(){
    this.createAccount = false; 
  }

  ngOnInit(): void {
  }

  getInfoUser(){
    this.service.getOneByUsername(this.username).subscribe({
      next : (user) => this.user = user,
      complete : () => this.displayInfo = true,
    })
    
  }

}
