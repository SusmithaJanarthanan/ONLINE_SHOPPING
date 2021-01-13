import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { New_Product } from '../models/newProduct.model';
import {NewProductService} from '../services/newProduct.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
newProducts:any;
newProd:New_Product;

  

constructor(private newproductService:NewProductService,
    private router:Router) { 
      this.newproductService.ViewNewProducts().subscribe(custs=>{
        this.newProducts = custs;
     })
    }

  
  
    ngOnInit(): void {
  }

  
  
  
  DeleteNewProduct(j){
    //console.log(j);
    this.newproductService.DeleteNewProduct(j).subscribe(data=>{
     console.log("deleted success");
     alert("product has been deleted");
     this.newproductService.ViewNewProducts().subscribe(custs=>{
      this.newProducts = custs;
   })
    })
  }

  goBack(){
    this.router.navigate(["../users"])
  }

}
