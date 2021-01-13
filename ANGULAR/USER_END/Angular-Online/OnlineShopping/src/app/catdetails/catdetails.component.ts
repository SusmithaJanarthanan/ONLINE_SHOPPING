import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PdtService } from '../services/pdts.service';
import { CookieService } from 'ngx-cookie-service';
import { Cart } from '../models/cart.model';
import { Wishlist } from '../models/wishlist.model';
import { CartService } from '../services/cart.service';
import { WishService } from '../services/wish.service';
import { ComparepdtService } from '../services/comparepdt.service';
import { Compare } from '../models/compare.model';
import { CompareService } from '../services/compare.service';

@Component({
  selector: 'app-catdetails',
  templateUrl: './catdetails.component.html',
  styleUrls: ['./catdetails.component.css']
})
export class CatdetailsComponent implements OnInit,OnDestroy
{
id?: any;
category:any;
wish:Wishlist;
cart:Cart;
compareList:Compare;
private sub:any;
p:number=1;
min="";
max="";
SortbyParam=" ";
SortOrder=" ";
msg:any;
Min="";
Max="";
check:any;
name="";
Name="";


  constructor(private myRoute:ActivatedRoute,private ProductService:PdtService,private CompareProd:ComparepdtService,private route:Router,private wishService:WishService,private cookieservice:CookieService,private cartservice:CartService,private compareService:CompareService)
  {
    this.compareList=new Compare();
    this.wish=new Wishlist();
    this.cart=new Cart();
    this.check=this.cookieservice.get('userid');
  }
  notallow()
{
     alert('Please Login');
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

  ngOnInit() {
      this.sub=this.myRoute.params.subscribe(params=>{
      this.id=+params['id'];
      console.log("Id given is "+this.id);
      this.ProductService.getPdtOfOneCategory(this.id).
      subscribe(data=>this.category=data)
    })


  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  showDetails(id:number)
  {
  console.log("Product chosen"+id);
  this.route.navigate(["Details",id])
  }
  addToWishlist(id:number)
  {
  if(this.check==='')
  {
  alert("Please Login!!")
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

addToCart(item:any)
  {
    if(this.check==='')
  {
  alert("Please Login!!")
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
  // console.log(this.Min);
  // console.log(this.Max);
  this.min=this.Min;
  this.max=this.Max;
  // console.log(this.min);
  // console.log(this.max);
}
onclear()
{
this.SortbyParam=" ";
this.SortOrder=" ";
}
FilterByPriceClear()
{
  this.Min='';
  this.Max=''
  this.min='';
  this.max='';
}

}
