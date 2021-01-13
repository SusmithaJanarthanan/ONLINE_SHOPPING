import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Retailer } from '../models/retailer.model';
import { RetailerService } from '../services/retailer.service';


@Component({
  selector: 'app-add-new-retailer',
  templateUrl: './add-new-retailer.component.html',
  styleUrls: ['./add-new-retailer.component.css']
})
export class AddNewRetailerComponent implements OnInit {

  retailer:Retailer;
  retail:any;
  msg:any;

  constructor(private retailerService:RetailerService,private router:Router)
  {
    this.retailer=new Retailer();
  }

  ngOnInit(): void {
  }

  AddRetailer(){
    // console.log(data);
    this.retailerService.AddRetailer(this.retailer).subscribe((result)=>{
      this.retail = result;
      // this.msg=undefined;
      console.log(this.retail);
      alert('Added Successfully')},
      err=>{this.msg = err.error.Message,
       alert(this.msg)});

      // console.log("result",result);
      // err=>this.msg = err.error.Message;
      // alert(this.msg);

    // alert("added successfully")
    this.router.navigate(['/retails']);
  }


  goBack(){
    this.router.navigate(["../retails"])
  }


}
