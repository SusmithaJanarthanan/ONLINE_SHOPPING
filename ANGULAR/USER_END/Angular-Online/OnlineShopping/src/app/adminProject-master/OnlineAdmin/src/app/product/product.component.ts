import { Component, OnInit } from '@angular/core';
import { Router ,RouterModule} from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  products:any;
  prod:Product
  
  constructor(private productService:ProductService,
    private router:Router) {
      this.productService.ViewProducts().subscribe(custs=>{
        this.products = custs;
     })
    }
    
    
   

  ngOnInit(): void {
  }
  
  
  
  ViewProducts(){
    this.productService.ViewProducts().subscribe(custs=>{
      this.products = custs;
   })
  }

  
  DeleteProduct(j){
    //console.log(j);
    this.productService.DeleteProduct(j).subscribe(data=>{
     console.log("deleted success");
    this.ViewProducts();
    })
  }

  goBack(){
    this.router.navigate(["../users"])
  }

}
