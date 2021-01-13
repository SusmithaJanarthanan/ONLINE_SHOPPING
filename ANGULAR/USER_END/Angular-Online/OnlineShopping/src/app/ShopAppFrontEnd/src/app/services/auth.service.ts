import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Retailer } from '../models/Retailer.model';




@Injectable()

export class authService{
    isLogged:boolean=false;
    retailerid:number;
    
    constructor(private getHttp:HttpClient,private cookieService: CookieService)
    {

    }
    public isAuthenticated(): boolean {
     
        if(this.cookieService.get('isauthenticated'))
        {
            return true;
        }
        return false;
        
       
      }
      
 
  

}