import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgxImageZoomComponent } from 'ngx-image-zoom';
import { PdtService } from '../services/pdts.service';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { CookieService } from 'ngx-cookie-service';
import { Cart } from '../models/cart.model';
import { Wishlist } from '../models/wishlist.model';
import { CartService } from '../services/cart.service';
import { WishService } from '../services/wish.service';
import { Compare } from '../models/compare.model';
import { CompareService } from '../services/compare.service';


 declare var $:any;

@Component({
  selector: 'app-pdtdetail',
  templateUrl: './pdtdetail.component.html',
  styleUrls: ['./pdtdetail.component.css']
})
export class PdtdetailComponent implements OnInit,OnDestroy {

  num!:number;
  id?:number;
  product:any;
  private sub:any;
  wish:Wishlist;
cart:Cart;
check:any;
compareList:any;



    constructor(private myRoute:ActivatedRoute,private  compareservice:CompareService,private ProductService:PdtService,private route:Router,private wishService:WishService,private cookieservice:CookieService,private cartservice:CartService)
    {
      this.wish=new Wishlist();
      this.cart=new Cart();
      this.compareList=new Compare();
      this.check=this.cookieservice.get('userid');
    }

    notallow()
    {
         alert('Login Pls');
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
     this.compareservice.addToComparlist(this.compareList).subscribe(data=>alert(data));
  }
}

   ngOnInit(): void {
    this.sub=this.myRoute.params.subscribe(params=>{
      this.id=+params['id'];
      console.log("Id given is "+this.id);
      this.ProductService.getOnePdtFromApi(this.id).
      subscribe(data=>this.product=data)
    })


  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    $(document).ready(function(){
      // $('.small-image img').click(function(){
      // var image=$(<any>this.$).attr('src');
      // $('.big-image img').attr('src',image);
      // });
      $('#zoom').imagezoomsl()
        });
    // $(document).ready(function(){
    //   $('#zoom').imagezoomsl();
    //      });

  }
//  change(num:any){
//     var temp1= document.getElementsByClassName("big-image");
//     var temp2= document.getElementsByClassName("xzoom-gallery"+num);
//     console.log(temp2[0].textContent)
//   //  temp1[0].setAttribute("src",temp2[0].getAttribute("src"));
// }


}
