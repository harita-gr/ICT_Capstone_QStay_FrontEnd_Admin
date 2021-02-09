import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StaysComponent } from './components/stays/stays.component';
import { UpdateStayComponent } from './components/update-stay/update-stay.component';
import { UpdateComponent } from './components/update/update.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'users',component:UsersComponent},
  {path:'registeredStays',component:StaysComponent},
  {path:'orderHistory',component:OrdersComponent},
  {path:'update',component:UpdateComponent},
  {path:'updateStay',component:UpdateStayComponent},
  {path:'myProfile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
