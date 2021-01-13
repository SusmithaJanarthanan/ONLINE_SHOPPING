import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Retailer } from '../models/Retailer.model';

@Injectable()
export class RetailerService{
    constructor(private getHttp:HttpClient)
    {

    }
    public getAllRetailers()
    {
        return this.getHttp.get("http://localhost:62441/api/Retailer/all");
    }
    // public getOneRetailer(retailer:Retailer)
    // {
    //     return this.getHttp.post("http://localhost:62441/api/Retailer/revenue",retailer);

    // }
    public getRetailerAmount(id:number)
    {
        return this.getHttp.get("http://localhost:62441/api/RetailRevenue/amount/"+id);
    }
    public loginRetailer(retailer:Retailer)
{
    return this.getHttp.post("http://localhost:62441/api/Login",retailer);
}
    public DeleteAccount(id:number)
    {
        return this.getHttp.delete("http://localhost:62441/api/Retailer/delete/"+id);
    }
    public getRetailerPersonal(id:number)
    {
        return this.getHttp.get("http://localhost:62441/api/Retailer/details/"+id);
    }

    public getretailerProductstatus(id:number)
    {
        return this.getHttp.get("http://localhost:62441/api/RetailRevenue/productstatus/"+id);
    }
    public getretailerUpdatestatus(id:number)
    {
        return this.getHttp.get("http://localhost:62441/api/RetailRevenue/updatestatus/"+id);
    }
    public getProductdetails(id:number)
    {
        return this.getHttp.get("http://localhost:62441/api/Product/"+id);
    }
    public ChangePass(retailer:Retailer)
    {
        return this.getHttp.put("http://localhost:62441/api/Retailer/changepass",retailer);
    }


}
