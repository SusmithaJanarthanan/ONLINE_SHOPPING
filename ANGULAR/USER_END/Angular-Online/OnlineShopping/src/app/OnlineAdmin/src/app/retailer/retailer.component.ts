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

  DeleteRetailer(j){
    //console.log(j);
    this.retailerService.DeleteRetailer(j).subscribe(data=>{
     console.log("deleted success");
    })
  }

  goBack(){
    this.router.navigate(["../users"])
  }

}
