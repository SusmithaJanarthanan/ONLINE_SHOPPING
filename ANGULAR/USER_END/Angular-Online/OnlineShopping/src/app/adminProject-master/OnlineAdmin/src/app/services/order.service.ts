import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Order } from "../models/order.model";

@Injectable()
export class OrderService{

    constructor(private httpClient:HttpClient){
    }

    public ViewOrders(){
        return this.httpClient.get("http://localhost:59193/api/Orders");
    }

}