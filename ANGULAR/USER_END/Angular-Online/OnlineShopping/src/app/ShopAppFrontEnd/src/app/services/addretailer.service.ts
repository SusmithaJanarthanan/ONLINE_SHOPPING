import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Retailer } from '../models/Retailer.model';



@Injectable()

export class addRetailerervice{
    constructor(private getHttp:HttpClient)
    {    }
    public addretailer(retailer:Retailer)
    {
        return this.getHttp.post("http://localhost:62441/api/Retailer",retailer);       
    }
    public getOneRetailer(id:number)
    {
        return this.getHttp.get("http://localhost:62441/api/RetailRevenue/revenue/"+id);

    }
   
  

}