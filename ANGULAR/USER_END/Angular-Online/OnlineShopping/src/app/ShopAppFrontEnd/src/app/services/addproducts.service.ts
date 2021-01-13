import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/addproduct.model';


@Injectable()
export class AddProductService{
    constructor(private getHttp:HttpClient)
    {

    }
    public getAllProducts()
    {
        return this.getHttp.get("http://localhost:62441/api/Product");
    }
    public addproduct(product:Product)
    {
        return this.getHttp.post("http://localhost:62441/api/Product/add",product);

    }
  

}