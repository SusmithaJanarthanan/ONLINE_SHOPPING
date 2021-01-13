import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Wishlist } from "../models/wishlist.model";
@Injectable()
export class WishService
{
    constructor(private getHttp:HttpClient,private addHttp:HttpClient,private removeHttp:HttpClient)
    {

    }

    public getWishlist(id:number)
    {
        return this.getHttp.get("http://localhost:61535/api/Wishlist/Items/"+id);
    }

    public addToWishlist(wish:Wishlist)
    {
        return this.addHttp.post("http://localhost:61535/api/Wishlist/Add/",wish);
    }
    public removeFromWishlist(id:number,wish1:Wishlist)
    {
        return this.removeHttp.put("http://localhost:61535/api/Wishlist/Delete/"+id,wish1);
    }
}
