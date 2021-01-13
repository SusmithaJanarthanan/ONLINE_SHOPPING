import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product.model'

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  products:any;
  product:Product;

  alert:boolean=false;
  editProduct=new FormGroup({
    
    Category_Id:new FormControl(''),
    Prod_Name:new FormControl(''),
    Prod_Price:new FormControl(''),
    Prod_Description:new FormControl(''),
    Prod_Quantity:new FormControl(''),
    Prod_Status:new FormControl(''),
    Retail_Id:new FormControl('')
  })


  constructor(private productService:ProductService, private router:ActivatedRoute,private rt:Router) {
    this.product = new Product();
    this.productService.ViewProducts().subscribe(data=>{
      this.products = data;
    });
   }
   

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.productService.GetCurrentProduct(this.router.snapshot.params.id).subscribe((result)=>{
      this.editProduct=new FormGroup({
    
        Category_Id:new FormControl(result['Category_Id']),
        Prod_Name:new FormControl(result['Prod_Name']),
        Prod_Price:new FormControl(result['Prod_Price']),
        Prod_Description:new FormControl(result['Prod_Description']),
        Prod_Quantity:new FormControl(result['Prod_Quantity']),
        Prod_Status:new FormControl(result['Prod_Status']),
        Retail_Id:new FormControl(result['Retail_Id'])
      })
  })
  }

  updateProduct(){
    console.log(this.editProduct.value)
    this.productService.updateProduct(this.router.snapshot.params.id,this.editProduct.value).subscribe((result)=>{
      console.log(result,"data updated siccess");
      alert("data updated")
      this.alert=true;
      this.rt.navigate(['/products'])
    })
  }

  
  ViewProducts(){
    this.productService.ViewProducts().subscribe(custs=>{
      this.products = custs;
   })
  }

  goBack(){
    this.rt.navigate(["../products"])
  }

}
