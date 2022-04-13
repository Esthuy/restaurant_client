import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private service : UserService) {
    service.obsUser.subscribe(connected => this.connected = connected); 
   }

  connected!: boolean;
  connection: boolean = false; 
  createAccount: boolean = false; 

  userName: string = "";  

  login(){
    this.connection = true; 
  }

  createUser(){
    this.createAccount = true; 
  }

  ngOnInit(): void {
  }

}
