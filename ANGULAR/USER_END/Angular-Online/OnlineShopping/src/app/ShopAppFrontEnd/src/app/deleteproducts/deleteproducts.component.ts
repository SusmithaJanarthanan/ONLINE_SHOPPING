import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { updateproduct } from '../models/updateProduct.model';
import { authService } from '../services/auth.service';
import { RetailerService } from '../services/Retailer.service';
import { UpdateProductService } from '../services/updateproduct.service';

@Component({
  selector: 'app-deleteproducts',
  templateUrl: './deleteproducts.component.html',
  styleUrls: ['./deleteproducts.component.css']
})
export class DeleteproductsComponent implements OnInit {
retailerproducts:any;
deleteproduct:updateproduct;
productdetails:any;
deletedproduct:any;
prodid:number;
msg:any;
  constructor(private updateproductservice:UpdateProductService,private authservice:authService,
    private retailerservice:RetailerService,private cookie:CookieService) {
      this.deleteproduct = new updateproduct();
    this.updateproductservice.getretailerProducts(parseInt(this.cookie.get('retailid'))).subscribe(a=>{
      this.retailerproducts=a;
    })
  }

  ngOnInit(): void {
  }
  DeleteProduct(id:number)
  {
    this.prodid=id;
    console.log(this.prodid);
  this.retailerservice.getProductdetails(this.prodid).subscribe(data=>{ this.productdetails = data; // able to print the data
    JSON.stringify(this.productdetails);
    this.processResults()},
    err=>this.msg = err.error.Message);
  }
  processResults()
  {
    console.log(this.productdetails.Prod_Id);
    this.deleteproduct.Prod_Id=this.productdetails.Prod_Id;
    this.deleteproduct.Prod_Name=this.productdetails.Prod_Name;
    this.deleteproduct.Prod_Price=this.productdetails.Prod_Price;
    this.deleteproduct.Prod_Quantity=this.productdetails.Prod_Quantity;
    this.deleteproduct.Update_Status="delete";
    this.deleteproduct.Retail_Id=this.productdetails.Retail_Id;
    console.log(this.deleteproduct);
    this.updateproductservice.updateProducts(this.deleteproduct).subscribe(u=>{this.deletedproduct = u; alert('Delete request submitted successfully')},
      err=>this.msg = err.error.Message);

  }

}

