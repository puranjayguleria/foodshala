import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { FoodServiceService } from '../service/food-service.service';
import { RestDetail } from '../classes/RestDetail';

@Component({
  selector: 'app-signup-restaurant',
  templateUrl: './signup-restaurant.component.html',
  styleUrls: ['./signup-restaurant.component.scss']
})
export class SignupRestaurantComponent implements OnInit {

  user: RestDetail = {username:"", password:"", restaurantName:""};
  
  constructor( private router: Router,
    private foodservice: FoodServiceService) { }

  ngOnInit() {  }
  
  data = true; 
    
  onSignup() {
    console.log(this.user);
    this.foodservice.RestaurantSignupEndpoint(this.user)
    .subscribe(data => {
      if (data == true){
        console.log("Login succesful!");
        this.router.navigate(['/login']);
      }
      else {
        console.log("Login failed!");
      }  
    })
 
    }
}