import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Cart } from '../models/cart.model';
import { Compare } from '../models/compare.model';
import { CartService } from '../services/cart.service';
import { CompareService } from '../services/compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit
{
  id:any;
  check:any;
  cart:Cart;
  id1?:any;

  compareList:any;

  constructor(private myRoute:ActivatedRoute,private route:Router,private compareService:CompareService,private cookieservice:CookieService,private cartService:CartService)
  {
    this.cart=new Cart();
    this.id=this.cookieservice.get('userid');
    console.log(this.id);
    this.compareService.getComparelist(this.id).subscribe(data=>{
      this.compareList=data;
      console.log(data);
      if(this.compareList.length<=0)
      {

        this.check=1;
      }
    });


   }
   addToCart(item:any)
   {
     this.cart.User_Id=this.id;
     this.cart.Prod_Id=item.Prod_Id;
     this.cart.Prod_Price=item.Prod_Price;
     this.cart.Prod_Quantity=item.Prod_Quantity;
     this.cartService.addToCart(this.cart).subscribe(data=>alert(data));
   }
   showDetails(id1:number)
  {
   console.log("hi"+id1)
   this.route.navigate(["Details",id1]);
  }
   addToCompare(item:any)
   {
     this.compareList.User_Id=this.id;
     this.compareList.Prod_Id=item.Prod_Id;
     this.compareService.addToComparlist(this.compareList).subscribe(data=>alert(data));
   }
   removeFromCompare(cmp1:Compare)
   {
     this.compareService.removeFromComparelist(this.id,cmp1).subscribe(data=>alert(data));
     window.location.reload();
   }

  ngOnInit(): void {
  }

}
