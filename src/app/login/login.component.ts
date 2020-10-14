import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetail } from '../classes/LoginDetail';
import { FoodServiceService } from '../service/food-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginDetail = {username:"", password:"", type:""};

  constructor( private router: Router,
    private foodservice: FoodServiceService) { }


  ngOnInit() {}
  
  data = true; 
    
  onLogin() {
    console.log(this.user);
    this.foodservice.LoginEndpoint(this.user)
    .subscribe(data => {
      if (data == true){
        this.router.navigate(['/menu']);
      }
      else {
        console.log("Login failed!");
      }  
    })
 
    }

}
