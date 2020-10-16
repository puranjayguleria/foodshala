import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../service/food-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-portal',
  templateUrl: './restaurant-portal.component.html',
  styleUrls: ['./restaurant-portal.component.scss']
})
export class RestaurantPortalComponent implements OnInit {
  
  constructor(private foodservice: FoodServiceService,private router: Router) { }
  uname:string=localStorage.getItem("username");
  item={name:'',religion:''}
  menu={username:this.uname,itemdet:[]}
  items_to_show:[{name:"hello",religion:"non"}];
  showTable:boolean=false;
  orders=[];
  ngOnInit() {
    if(localStorage.getItem("username")==null){
      this.router.navigate(['/login'])
    }
    this.foodservice.getMenuItems(this.uname).subscribe(data=>
      {
        this.items_to_show=data.itemdet;
       
        console.log(this.items_to_show);
        this.showTable=true;
       
      });
      this.foodservice.getOrdersSummary(this.uname).subscribe(data=>
        {
          console.log(data);
          this.orders=data;
        })
  }
  onSubmit(){
    this.foodservice.addMenuItem(this.menu)
    .subscribe(data => {
      if (data == true){
        console.log("saved!")
        
      }
      else {
        console.log("save failed!");
      }  
    })
 

  }
  logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("type");

    this.router.navigate(['/login'])
  }

  addToArray(){
    this.menu.itemdet.push(this.item);
    console.log(this.menu);
  }
  
}
