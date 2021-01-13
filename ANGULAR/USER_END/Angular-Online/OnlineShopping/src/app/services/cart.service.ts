import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cart } from "../models/cart.model";

@Injectable()
export class CartService
{
    constructor(private getHttp:HttpClient,private addHttp:HttpClient,private removeHttp:HttpClient)
    {

    }

    public getCart(id:number)
    {
        return this.getHttp.get("http://localhost:61535/api/Cart/List/"+id);
    }

    public addToCart(cart:Cart)
    {
        return this.addHttp.post("http://localhost:61535/api/Cart/Add/",cart);
    }
    public removeFromCart(id:number)
    {
        return this.removeHttp.delete("http://localhost:61535/api/Cart/Delete/"+id);
    }
    public incQty(id:number,inc:number)
    {
        return this.getHttp.put("http://localhost:61535/api/Cart/Inc/"+id,inc);
    }
    public decQty(id:number)
    {
        return this.getHttp.put("http://localhost:61535/api/Cart/Inc/"+id,-1);
    }

    public calTotal(id:number)
    {
        return this.getHttp.get("http://localhost:61535/api/Cart/Total/"+id)
    }

}
