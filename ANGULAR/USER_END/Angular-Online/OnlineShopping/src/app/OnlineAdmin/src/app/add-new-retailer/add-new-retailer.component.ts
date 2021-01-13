import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerService } from '../services/retailer.service';

@Component({
  selector: 'app-add-new-retailer',
  templateUrl: './add-new-retailer.component.html',
  styleUrls: ['./add-new-retailer.component.css']
})
export class AddNewRetailerComponent implements OnInit {

  constructor(private retailerService:RetailerService,private router:Router) { }

  ngOnInit(): void {
  }

  AddRetailer(data){
    console.log(data);
    this.retailerService.AddRetailer(data).subscribe((result)=>{
      console.log("result",result)
    });
    alert("added successfully")
    this.router.navigate(['/retails']);
  }


}
