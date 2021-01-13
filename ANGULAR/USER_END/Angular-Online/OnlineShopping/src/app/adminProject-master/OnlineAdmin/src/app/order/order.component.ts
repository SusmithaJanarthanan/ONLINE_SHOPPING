import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders:any;

  constructor(private orderService:OrderService,private router:Router) { 
    this.orderService.ViewOrders().subscribe(custs=>{
      this.orders = custs;
      console.log(this.orders)
    })
  }

  ngOnInit(): void {
  }


  goBack(){
    this.router.navigate(["../users"])
  }

}
