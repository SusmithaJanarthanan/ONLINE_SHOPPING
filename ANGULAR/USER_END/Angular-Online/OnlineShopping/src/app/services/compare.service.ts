import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Compare } from "../models/compare.model";




@Injectable()
export class CompareService
{
    constructor(private getHttp:HttpClient,private addHttp:HttpClient,private removeHttp:HttpClient)
    {

    }

public getComparelist(id:number)
{
    return this.getHttp.get("http://localhost:61535/api/Compare/GetCompList/"+id);;
}

public addToComparlist(cmp:Compare)
{
    return this.addHttp.post("http://localhost:61535/api/Compare/AddCompList",cmp);
}
public removeFromComparelist(id:number,cmp1:Compare)
{
    return this.removeHttp.put("http://localhost:61535/api/Compare/RemoveCompList/"+id,cmp1);
}

}
