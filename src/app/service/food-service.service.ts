import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustDetail } from '../classes/CustDetail';
import { LoginDetail } from '../classes/LoginDetail';
import { RestDetail } from '../classes/RestDetail';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(private http: HttpClient) { }

  CustomerSignupEndpoint(cd: CustDetail): Observable<boolean>{
    console.log('data sent!');
    return this.http.post<boolean>('https://arcane-lake-67019.herokuapp.com/api/customer', cd);    
  }

  RestaurantSignupEndpoint(rd: RestDetail): Observable<boolean>{
    console.log('data sent!');
    return this.http.post<boolean>('https://arcane-lake-67019.herokuapp.com/api/restaurant', rd);    
  }

  LoginEndpoint(ld: LoginDetail): Observable<boolean>{
    console.log('data sent!');
    return this.http.post<boolean>('https://arcane-lake-67019.herokuapp.com/api/Login', ld);    
  }
  
  addMenuItem(item:any):Observable<boolean>{
    return this.http.post<boolean>('https://arcane-lake-67019.herokuapp.com/api/menu',item);
  }
  getMenuItems(uname:string):Observable<any>{
    return this.http.get<any>('https://arcane-lake-67019.herokuapp.com/api/menu/'+uname);
  }
  getallMenuItems():Observable<any>{
    return this.http.get<any>('https://arcane-lake-67019.herokuapp.com/api/dashboard')
  }
  addOrderSummary(orderdata:any):Observable<boolean>{
    return this.http.post<boolean>('https://arcane-lake-67019.herokuapp.com/api/restaurant_orders',orderdata);
  }
  getOrdersSummary(uname:string):Observable<any>{
    return this.http.get<any>('https://arcane-lake-67019.herokuapp.com/api/get_orders/'+uname);
  }
}
