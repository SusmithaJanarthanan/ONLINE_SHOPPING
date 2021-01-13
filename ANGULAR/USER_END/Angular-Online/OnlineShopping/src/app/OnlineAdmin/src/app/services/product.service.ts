import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService{

    constructor(private httpClient:HttpClient){
    }

    public ViewProducts(){
        return this.httpClient.get("http://localhost:59193/api/Products");
    }

    public GetCurrentProduct(id:number){
        return this.httpClient.get("http://localhost:59193/api/Products/"+id);
    }

    public DeleteProduct(id:number){
        return this.httpClient.delete("http://localhost:59193/api/Products/"+id);
    }

    public updateProduct(id:number,data:Product){
        return this.httpClient.put("http://localhost:59193/api/Products/"+id,data);
    }

}