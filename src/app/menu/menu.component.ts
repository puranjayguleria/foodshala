import { FoodServiceService } from './../service/food-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router,private foodService:FoodServiceService,public snackBar:MatSnackBar) { }
  items:[];
  type:string=localStorage.getItem("type");
  loggedInUsername:string=localStorage.getItem("username");
  ngOnInit() {
    this.foodService.getallMenuItems().subscribe(data=>{
        console.log(data);
        console.log("h");
        this.items=data;
    })

  }
  orderitem(restaurantUsername,orderedItem){
    if(this.type==null){
      this.router.navigate(['/login']);
    }
    else{
        let orderdata={"restaurantUsername":restaurantUsername,"loggedInUsername":this.loggedInUsername,"orderedItem":orderedItem};
        this.foodService.addOrderSummary(orderdata).subscribe(data=>{
          console.log(data);
          if(data==true){
            this.snackBar.open("Ordered Successful! You have been logged out! Your order is on the way! " ,"ok", {
              duration: 10000
           });
           localStorage.removeItem("username");
           localStorage.removeItem("type");
          }
        })
    }
  }

}
