import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { New_Product } from '../models/newProduct.model';
import {NewProductService} from '../services/newProduct.service'

@Component({
  selector: 'app-edit-new-request',
  templateUrl: './edit-new-request.component.html',
  styleUrls: ['./edit-new-request.component.css']
})


export class EditNewRequestComponent implements OnInit {
newProducts:any;
newProd:New_Product;

alert:boolean=false;
editNewRequest=new FormGroup({
  Update_Id:new FormControl(''),
  Prod_Id:new FormControl(''),
  Prod_Name:new FormControl(''),
  Prod_Price:new FormControl(''),
  Prod_Quantity:new FormControl(''),
  Update_Status:new FormControl('')
})

  

constructor(private newProductService:NewProductService,private router:ActivatedRoute ,private rt:Router) {
    this.newProd= new New_Product();
      this.newProductService.ViewNewProducts().subscribe(data=>{
        this.newProducts = data;
      });
   }

 
 
   ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.newProductService.GetCurrentNewProduct(this.router.snapshot.params.id).subscribe((result)=>{
      this.editNewRequest=new FormGroup({
        Update_Id:new FormControl(result['Update_Id']),
        Prod_Id:new FormControl(result['Prod_Id']),
        Prod_Name:new FormControl(result['Prod_Name']),
        Prod_Price:new FormControl(result['Prod_Price']),
        Prod_Quantity:new FormControl(result['Prod_Quantity']),
        Update_Status:new FormControl(result['Update_Status'])
      })
    })
    
  }

  
  
  updateNewProduct(){
    console.log(this.editNewRequest.value)
    this.newProductService.updateNewProduct(this.router.snapshot.params.id,this.editNewRequest.value).subscribe((result)=>{
      console.log(result,"data updated siccess");
      alert("data update successful");
      this.alert=true;
    });
    this.rt.navigate(['/products']);
  }

  goBack(){
    this.rt.navigate(["../newProd"])
  }

}
