import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,NgModel,Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from '../services/checkout.service';
import {CheckOut} from '../models/checkout.model'
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.scss']
})
export class CheckoutpageComponent implements OnInit {
  checkout:any={}
  total1:any;
  user_id:any;
  order:any;
  id:any;

  constructor(private myRoute:ActivatedRoute,private checkoutService:CheckoutService,private route:Router,private cartservice:CartService) {

    this.ngOnInit();
    this.order=new CheckOut();
    this.user_id= this.myRoute.snapshot.params["id1"];
    this.id=this.user_id;
    console.log(this.user_id);
    this.checkoutService.getOrdersfromCart(this.user_id).subscribe(data=>
    this.order=data);
    this.cartservice.calTotal(this.id).subscribe((data:any)=>{this.total1=data
    });
  }
  ngOnInit(): void {
  }

  OnSubmit(){
    this.ngOnInit();
    this.route.navigate(["thankyou"]);
    console.log(this.order);
    console.log(this,this.user_id);
    this.checkoutService.updateOrdersDeleteCart(this.user_id,this.order).subscribe(msg=>
      console.log("Called"));
  }
}
