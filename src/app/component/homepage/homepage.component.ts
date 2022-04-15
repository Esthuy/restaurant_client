import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router, private userService : UserService) { 
    userService.obsUserIsConnected.subscribe(connected => this.connected = connected); 
  }

  connected! : boolean;  


  login(){
    this.router.navigateByUrl('/connection');
  }

  restaurants(){
    this.router.navigateByUrl('/restaurants'); 
  }


  
}
