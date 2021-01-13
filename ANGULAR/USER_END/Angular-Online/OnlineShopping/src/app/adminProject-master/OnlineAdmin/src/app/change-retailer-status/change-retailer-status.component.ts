import { Component, OnInit } from '@angular/core';
import { Retailer } from '../models/retailer.model';
import { RetailerService } from '../services/retailer.service';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-change-retailer-status',
  templateUrl: './change-retailer-status.component.html',
  styleUrls: ['./change-retailer-status.component.css']
})
export class ChangeRetailerStatusComponent implements OnInit {

 retailers:any;
  retailer:Retailer;

  alert:boolean=false;
  editRetailer=new FormGroup({
    Company_Name:new FormControl(''),
    Retail_Name:new FormControl(''),
    Retail_Password:new FormControl(''),
   
    Retail_Phone:new FormControl(''),
    Retail_Email:new FormControl(''),
    Retail_Status:new FormControl('')
  })


  
  constructor(private retailerService:RetailerService, private router:ActivatedRoute,private rt:Router) { 
      this.retailer = new Retailer();
      this.retailerService.ViewRetailer().subscribe(data=>{
        this.retailers = data;
      });
  }

 

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.retailerService.GetCurrentRetailer(this.router.snapshot.params.id).subscribe((result)=>{
      this.editRetailer=new FormGroup({
        Company_Name:new FormControl(result['Company_Name']),
        Retail_Name:new FormControl(result['Retail_Name']),
        Retail_Password:new FormControl(result['Retail_Password']),
       
        Retail_Phone:new FormControl(result['Retail_Phone']),
        Retail_Email:new FormControl(result['Retail_Email']),
        Retail_Status:new FormControl(result['Retail_Status'])
      })
    })
    
  }



  updateRetailer(){
    console.log(this.editRetailer.value)
    this.retailerService.updateRetailer(this.router.snapshot.params.id,this.editRetailer.value).subscribe((result)=>{
      console.log(result,"data updated siccess");
      alert("data updated")
      this.alert=true;
      this.rt.navigate(['/retails'])
    })
  }

  closeAlert(){
        this.alert=false;
  }

}
