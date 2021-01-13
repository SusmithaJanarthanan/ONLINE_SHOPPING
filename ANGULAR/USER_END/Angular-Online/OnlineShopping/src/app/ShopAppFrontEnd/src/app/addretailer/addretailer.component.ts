import { Component, OnInit } from '@angular/core';
import { Dummy } from '../models/dummy.model';
import { Retailer } from '../models/Retailer.model';
import { addRetailerervice } from '../services/addretailer.service';

@Component({
  selector: 'app-addretailer',
  templateUrl: './addretailer.component.html',
  styleUrls: ['./addretailer.component.css']
})
export class AddretailerComponent implements OnInit {
retailer:Retailer;
dummy:Dummy;
user:any;
msg:any;
  constructor(private addretailerservice:addRetailerervice) {
    this.retailer=new Retailer();
    this.dummy=new Dummy();
  }

  Add()
  {
    console.log(this.retailer);
    this.addretailerservice.addretailer(this.retailer).subscribe(
      u=>{this.user = u; this.msg=undefined;console.log(this.user);alert('Registerd Successfully')},
      err=>this.msg = err.error.Message);
  }

  comparepass(p1,p2)
  {
    if(p1.value!==p2.value)
    {
      return true;
    }
    return false;
  }
  ngOnInit(): void {
  }

}
