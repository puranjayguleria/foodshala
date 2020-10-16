import { RestaurantPortalComponent } from './restaurant-portal/restaurant-portal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignupCustomerComponent } from './signup-customer/signup-customer.component';
import { SignupRestaurantComponent } from './signup-restaurant/signup-restaurant.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 { path: '', redirectTo: '/menu', pathMatch: 'full' },
 { path: 'signup', component: SignupComponent },
 { path: 'signup-restaurant', component: SignupRestaurantComponent },
 { path: 'signup-customer', component: SignupCustomerComponent },
 { path: 'login', component: LoginComponent },
 { path: 'menu', component: MenuComponent },
 {path : 'restaurant', component:RestaurantPortalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
