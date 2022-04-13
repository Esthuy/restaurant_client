import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayAllComponent } from './component/display-all/display-all.component';
import { DisplayOneComponent } from './component/display-one/display-one.component';
import { AddOneRestaurantComponent } from './component/add-one-restaurant/add-one-restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './component/connexion/create-account/create-account.component';
import { LoginComponent } from './component/connexion/login/login.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { HomepageComponent } from './component/homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    DisplayAllComponent, 
    DisplayOneComponent,
    AddOneRestaurantComponent,
    CreateAccountComponent,
    LoginComponent,
    ConnexionComponent, 
    HomepageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule , 
    FormsModule, 
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
