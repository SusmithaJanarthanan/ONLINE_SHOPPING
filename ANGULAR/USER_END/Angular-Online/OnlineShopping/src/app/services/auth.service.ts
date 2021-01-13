import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Users } from '../models/user.model';



@Injectable()

export class authService{
    isLogged:boolean=false;
    userid:any;
    username: string="";
    name!:string;
    constructor(private getHttp:HttpClient,private cookieService: CookieService)
    {

    }
    public isAuthenticated(): boolean
     {
      this.name=this.cookieService.get('username');
      this.userid=this.cookieService.get('userid');
      if(this.name)
        {
            console.log(this.isLogged);
            return true;
        }
         console.log(this.isLogged);
         return false;
     }

}
