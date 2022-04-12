import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { AddOneRestaurantComponent } from './component/add-one-restaurant/add-one-restaurant.component';
import { DisplayAllComponent } from './component/display-all/display-all.component';
import { DisplayOneComponent } from './component/display-one/display-one.component';


const routes: Routes = [
  { path:"", redirectTo:"accueil", pathMatch:'full' }, 
  { path:"accueil", component: AccueilComponent }, 
  { path:"restaurant/:id", component: DisplayOneComponent},
  { path:"restaurants", component: DisplayAllComponent},
  { path:"ajouter", component: AddOneRestaurantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
