import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-successful',
  templateUrl: './order-successful.component.html',
  styleUrls: ['./order-successful.component.scss']
})
export class OrderSuccessfulComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }
loginRedirect(){
  this.router.navigate(['/login']);
}
}
