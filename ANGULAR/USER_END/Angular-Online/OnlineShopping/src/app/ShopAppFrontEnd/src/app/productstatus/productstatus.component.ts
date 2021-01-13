import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { authService } from '../services/auth.service';
import { RetailerService } from '../services/Retailer.service';

@Component({
  selector: 'app-productstatus',
  templateUrl: './productstatus.component.html',
  styleUrls: ['./productstatus.component.css']
})
export class ProductstatusComponent implements OnInit {
  productstatus:any;
  updatestatus:any;
  msg:any;

  constructor(private authservice:authService,private cookie:CookieService,private retailerservice:RetailerService) {
    this.retailerservice.getretailerProductstatus(parseInt(this.cookie.get('retailid'))).subscribe( u=>{this.productstatus = u},
      err=>this.msg = err.error.Message);

      this.retailerservice.getretailerUpdatestatus(parseInt(this.cookie.get('retailid'))).subscribe( u=>{this.updatestatus = u},
        err=>this.msg = err.error.Message)
   }

  ngOnInit(): void {
  }

}
