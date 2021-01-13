import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerService } from '../services/retailer.service';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {
retailers:any;
  constructor(private retailerService:RetailerService,
    private router:Router) { 
      this.retailerService.ViewRetailer().subscribe(custs=>{
        this.retailers = custs;
     })
    }

  ngOnInit(): void {
  }

  ViewRetailers(){
    this.retailerService.ViewRetailer().subscribe(custs=>{
      this.retailers = custs;
   })
  }

  DeleteRetailer(id){
    //console.log(j);
    this.retailerService.DeleteRetailer(id).subscribe(data=>{
     console.log("deleted success");
     alert("successfully deleted!!");
    this.ViewRetailers();
    })
  }

  goBack(){
    this.router.navigate(["../users"])
  }

  getRevenue(id){
    this.retailerService.getRevenue(id).subscribe(result=>{
      console.log(result);
      alert("total revenue generated is" + result)
    })
  }

}
