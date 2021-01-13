import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Retailer } from '../models/retailer.model';


@Injectable()
export class RetailerService{

    constructor(private getHttp:HttpClient ){
    }

    public ViewRetailer(){
        return this.getHttp.get("http://localhost:59193/api/Retailers");
    }
    
    public AddRetailer(ret:Retailer){
        return this.getHttp.post("http://localhost:59193/api/Retailers",ret);
        
    }
    
    public GetCurrentRetailer(id:number){
        return this.getHttp.get("http://localhost:59193/api/Retailers/"+id);
    }

    public DeleteRetailer(id:number){
        return this.getHttp.delete("http://localhost:59193/api/Retailers/"+id);
    }

    public updateRetailer(id:number,data:Retailer){
        return this.getHttp.put("http://localhost:59193/api/Retailers/"+id,data);
    }


    public getRevenue(id:number){
        return this.getHttp.get("http://localhost:59193/api/RetailRevenue/"+id);
    }

}