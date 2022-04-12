import { Component } from '@angular/core';
import { Restaurant } from './model/restaurant.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant_client';

  list: Restaurant[] = [
    {
      id: 1, 
      name: "toto"
    }, 
    {
      id: 2, 
      name: "coucou"
    }
  ];
}
