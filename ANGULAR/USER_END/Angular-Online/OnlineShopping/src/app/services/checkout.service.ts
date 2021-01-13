import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CheckOut} from '../models/checkout.model'

@Injectable()
export class CheckoutService
{
  constructor(private getHttp:HttpClient,private putHttp:HttpClient )
  {

  }
  public getOrdersfromCart(id:number)
  {
    return this.getHttp.get("http://localhost:61535/api/CheckOut/GetOrdersCart/"+id);
  }

  public updateOrdersDeleteCart(id:number,checkout:CheckOut)
  {
    return this.getHttp.put("http://localhost:61535/api/CheckOut/InsInToOrd/"+id,checkout);
  }

}
