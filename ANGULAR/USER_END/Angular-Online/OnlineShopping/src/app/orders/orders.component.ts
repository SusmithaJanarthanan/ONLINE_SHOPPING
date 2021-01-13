import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { parse } from 'path';
import { OrderService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  id:number;
  order:any;
  constructor(private myRoute:ActivatedRoute,private orderService:OrderService,private route:Router,private cookieservice:CookieService) {

    this.ngOnInit();
   this.id=parseInt(this.cookieservice.get('userid'));
    //this.id= this.myRoute.snapshot.params["id"];
    console.log(this.id);
    this.orderService.getOrders(this.id).subscribe(data=>
     this.order=data);

  }
  orderPlaced(){
    this.ngOnInit();
    this.route.navigate(["thankyoupage"])

  }

  ngOnInit(): void {
  }



}


