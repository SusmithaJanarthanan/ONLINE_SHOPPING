import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Dummy } from '../models/dummy.model';
import { Retailer } from '../models/Retailer.model';
import { authService } from '../services/auth.service';
import { RetailerService } from '../services/Retailer.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
retailer:Retailer;
dummy:Dummy;
dummy1:Dummy;
password:string;
retailerdetails:any;
msg:any;
  constructor(private cookieservice:CookieService,private router:Router,private retailerservice:RetailerService,private authservice:authService) {
    this.retailer=new Retailer();
    this.dummy=new Dummy();
    this.dummy1=new Dummy();

   }
   Add()
   {
     this.retailer.Retail_Id=parseInt(this.cookieservice.get('retailid'));
     this.retailerservice.ChangePass(this.retailer).subscribe(u=>{this.retailerdetails = u;alert('Password Changed Successfully')},
      err=>this.msg = err.error.Message);
      this.Logout();
      this.router.navigate([""]);
   }
   Logout()
   {
      this.cookieservice.delete('retailid');
    this.cookieservice.delete('retailuser');
    this.cookieservice.delete('retailpassword');
    this.cookieservice.delete('isauthenticated');
    this.authservice.isLogged=false;
     window.location.reload();
   }
   check(val){
    this.password=this.cookieservice.get('retailpassword');
    if (val.value !== this.password){

      return true;

    }
    return false;
  }
  comparepass(p1,p2)
  {
    if(p1.value!==p2.value)
    {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
  }

}
