import { Component, OnInit } from '@angular/core';
import { Product } from '../models/addproduct.model';
import { CategoryService} from '../services/Category.service';
import{AddProductService} from '../services/addproducts.service';
import { DecimalPipe } from '@angular/common';
import { Retailer } from '../models/Retailer.model';
import { RetailerService } from '../services/Retailer.service';
import { RouterModule } from '@angular/router';
import {ActivatedRoute, Router} from '@angular/router';
import { authService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
category:any;
product:Product;
ans:number;
retailers:any;
products:any;
addproduct:any;
checkval:string;
catlist:any;
fileToUpload: any;
  imageUrl: any;
msg:string;
  constructor(private categoryservice:CategoryService,
    private retailerservice:RetailerService,
    private route:ActivatedRoute,
    private router:Router,
    private addproductservics:AddProductService,
    private authservice:authService,
    private decimalpipe:DecimalPipe,
    private cookie:CookieService) {
    this.product=new Product();
    this.categoryservice.getAllCategories().subscribe(
      data => {
        this.category = data; // able to print the data
        this.processResults()},
        err=>this.msg = err.error.Message);


         //  let keyss = Object.keys(this.category[0]);
      // console.log(keyss);});
    this.retailerservice.getAllRetailers().subscribe(a=>{
      this.retailers=a;
    });
    this.addproductservics.getAllProducts().subscribe(a=>{
      this.products=a;
    })
    }
    onSubmit()
    {
     // this.product.Prod_Price=this.product.Prod_Price;
     this.product.Retail_Id=parseInt(this.cookie.get('retailid'));
     this.product.Prod_Image= this.imageUrl;
      console.log(this.product);
      this.addproductservics.addproduct(this.product).subscribe(u=>{this.addproduct = u;console.log(this.addproduct)},
        err=>this.msg = err.error.Message);
      alert('Product added successfully');
    }
    processResults()
    {
      console.log(this.category);
      this.catlist=this.category;
      console.log(this.catlist);

    }
    handleFileInput(file: FileList) {
      this.fileToUpload = file.item(0);
      let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      console.log(this.imageUrl);
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  ngOnInit(): void {
  }

}
