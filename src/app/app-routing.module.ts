import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOneRestaurantComponent } from './component/add-one-restaurant/add-one-restaurant.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { DisplayAllComponent } from './component/display-all/display-all.component';
import { DisplayOneComponent } from './component/display-one/display-one.component';
import { HomepageComponent } from './component/homepage/homepage.component';


const routes: Routes = [
  { path:"", redirectTo:"homepage", pathMatch:'full' }, 
  { path:"homepage", component: HomepageComponent }, 
  { path:"restaurant/:id", component: DisplayOneComponent},
  { path:"restaurants", component: DisplayAllComponent},
  { path:"add", component: AddOneRestaurantComponent},
  { path:"connection", component: ConnectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
