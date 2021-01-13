import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Cart } from '../models/cart.model';
import { Compare } from '../models/compare.model';
import { Wishlist } from '../models/wishlist.model';
import { CartService } from '../services/cart.service';
import { CompareService } from '../services/compare.service';
import { PdtService } from '../services/pdts.service';
import { WishService } from '../services/wish.service';


@Component({
  selector: 'app-getallpdt',
  templateUrl: './getallpdt.component.html',
  styleUrls: ['./getallpdt.component.css']
})
export class GetallpdtComponent implements OnInit {
products:any;
id:any;
wish:Wishlist;
cart:Cart;
min="";
max="";
SortbyParam=" ";
SortOrder=" ";
msg:any;
Min="";
Max="";
p:number=1;
check:any;
name="";
Name="";
compareList:Compare;



  constructor(private PdtService:PdtService,private route:Router,private wishService:WishService,private cookieservice:CookieService,private cartservice:CartService,private compareService:CompareService)
   {
     this.wish=new Wishlist();
     this.cart=new Cart();
     this.compareList=new Compare();

     this.check=this.cookieservice.get('userid');
   }
refre()
{
window.location.reload();
}
notallow()
{
     alert('Login Pls');
}


 showDetails(id:number)
{
 console.log("hi"+id)
 this.route.navigate(["Details",id]);
}

addToWishlist(id:number)
{
  if(this.check==='')
  {
  alert("Please Login to continue!!")
  }
  else
  {
  this.wish.User_Id=parseInt(this.cookieservice.get('userid'));
  this.wish.Prod_Id=id;
  console.log(this.wish.Prod_Id);
  console.log(this.wish);
  this.wishService.addToWishlist(this.wish).subscribe(data=>alert(data));
  }
}
addToCompare(item:any)
{

  if(this.check==='')
  {
  alert("Please Login to continue!!")
  }
  else
  {
     this.compareList.User_Id=parseInt(this.cookieservice.get('userid'));
     this.compareList.Prod_Id=item.Prod_Id;
     this.compareService.addToComparlist(this.compareList).subscribe(data=>alert(data));
  }
}
OnSearch()
{
  this.name=this.Name;
}
OnClear()
{
  this.Name='';
  this.name='';

}

addToCart(item:any)
  {
    if(this.check==='')
  {
  alert("Please Login to continue!!")
  }
  else
  {
    this.cart.User_Id=parseInt(this.cookieservice.get('userid'));
    this.cart.Prod_Id=item.Prod_Id;
    this.cart.Prod_Price=item.Prod_Price;
    this.cart.Prod_Quantity=item.Prod_Quantity;

    this.cartservice.addToCart(this.cart).subscribe(data=>alert(data));
  }
}

FilterByPrice()
{
  console.log(this.Min);
  console.log(this.Max);
  this.min=this.Min;
  this.max=this.Max;
  console.log(this.min);
  console.log(this.max);
}
onclear()
{
this.SortbyParam=" ";
this.SortOrder=" ";
}

  ngOnInit(): void {
    this.PdtService.getAllPdts().subscribe(data=>{
      this.products=data;
    })

  }
  FilterByPriceClear()
  {
    this.Min='';
    this.Max=''
    this.min='';
    this.max='';
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

}
