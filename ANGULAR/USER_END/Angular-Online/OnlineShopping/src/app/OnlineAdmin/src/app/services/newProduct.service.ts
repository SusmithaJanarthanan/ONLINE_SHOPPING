import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import {New_Product} from '../models/newProduct.model';
@Injectable()
export class NewProductService{

    constructor(private httpClient:HttpClient){
    }

    public ViewNewProducts(){
        return this.httpClient.get("http://localhost:59193/api/Update_Products");
    }

    public GetCurrentNewProduct(id:number){
        return this.httpClient.get("http://localhost:59193/api/Update_Products/"+id);
    }

    public DeleteNewProduct(id:number){
        return this.httpClient.delete("http://localhost:59193/api/Update_Products/"+id);
    }

    public updateNewProduct(id:number,data:New_Product){
        return this.httpClient.put("http://localhost:59193/api/Update_Products/"+id,data);
    }

}