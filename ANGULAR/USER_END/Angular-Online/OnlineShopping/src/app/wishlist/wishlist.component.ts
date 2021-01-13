import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { Wishlist } from '../models/wishlist.model';
import { CartService } from '../services/cart.service';
import { WishService } from '../services/wish.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
wishlist:any;
wish:Wishlist;
id?:any;
id1?:any;
cart:Cart;
item:any;
check:any;
  constructor(private myRoute:ActivatedRoute, private wishService:WishService,private route:Router,
    private cartService:CartService)

  {

    this.wish=new Wishlist();
    this.item=new Wishlist();
    this.cart=new Cart();
    this.id=this.myRoute.snapshot.params["id"];
    console.log(this.id);

    this.wishService.getWishlist(this.id).subscribe(data=>{
      this.wishlist=data;
      console.log(data);
      if(this.wishlist.length<=0)
      {

        this.check=1;
      }
    })
  }

  addToWishlist(item:any)
  {
    this.wish.User_Id=this.id;
    this.wish.Prod_Id=item.Prod_Id;
    this.wishService.addToWishlist(this.wish).subscribe(data=>alert(data));
  }
  showDetails(id1:number)
  {
   console.log("hi"+id1)
   this.route.navigate(["Details",id1]);
  }
  addToCart(item:any)
  {
    this.cart.User_Id=this.id;
    this.cart.Prod_Id=item.Prod_Id;
    this.cart.Prod_Price=item.Prod_Price;
    this.cart.Prod_Quantity=item.Prod_Quantity;
    this.cartService.addToCart(this.cart).subscribe(data=>alert(data));
  }
  removeFromWishlist(wish1:Wishlist)
  {
    this.wishService.removeFromWishlist(this.id,wish1).subscribe(data=>console.log(data));
    window.location.reload();
  }
  ngOnInit(): void {
  }

}
