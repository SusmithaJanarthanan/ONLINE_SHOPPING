import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/addproduct.model';
import { Retailer } from '../models/Retailer.model';
import { updateproduct } from '../models/updateProduct.model';

@Injectable()
export class UpdateProductService{
    constructor(private getHttp:HttpClient)
    {
    }
    public getAllUpdates()
    {
        return this.getHttp.get("http://localhost:62441/api/UpdateProduct");
    }
    public updateProducts(product:updateproduct)
    {
        return this.getHttp.post("http://localhost:62441/api/Product/update",product);
    }
    public getretailerProducts(id:number)
    {
      
        return this.getHttp.get("http://localhost:62441/api/Product/retailer/"+id);

    }



}
