import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayAllComponent } from './component/display-all/display-all.component';
import { DisplayOneComponent } from './component/display-one/display-one.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DisplayAllComponent, 
    DisplayOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule , 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
