import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  OnClickRes(){
    this.router.navigate(['/signup-restaurant'])
    .then(success => console.log('navigation success?' , success))
    .catch(console.error); 
  }

  OnClickCust(){
    this.router.navigate(['/signup-customer'])
    .then(success => console.log('navigation success?' , success))
    .catch(console.error); 
  }

}
