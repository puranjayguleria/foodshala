import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustDetail } from '../classes/CustDetail';
import { FoodServiceService } from '../service/food-service.service';

@Component({
  selector: 'app-signup-customer',
  templateUrl: './signup-customer.component.html',
  styleUrls: ['./signup-customer.component.scss']
})
export class SignupCustomerComponent implements OnInit {

  user: CustDetail = {username:"", password:"", religion:""};

  constructor( private router: Router,
    private foodservice: FoodServiceService) { }


  ngOnInit() {}
  
  data = true; 
    
  onSignup() {
    console.log(this.user);
    this.foodservice.CustomerSignupEndpoint(this.user)
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
