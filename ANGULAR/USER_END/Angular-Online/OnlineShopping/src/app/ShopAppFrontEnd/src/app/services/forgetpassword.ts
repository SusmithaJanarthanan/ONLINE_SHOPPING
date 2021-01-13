import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Retailer } from '../models/Retailer.model';



@Injectable()
export class ForgetPasswordService{
    constructor(private getHttp:HttpClient)
    {

    }
    public sendMail(retailer:Retailer){
       
        return this.getHttp.post("http://localhost:62441/api/GenerateEmail",retailer);
    }
    public savePass(retailer:Retailer){
      
        return this.getHttp.put("http://localhost:62441/api/GenerateEmail/save",retailer);
    }
}