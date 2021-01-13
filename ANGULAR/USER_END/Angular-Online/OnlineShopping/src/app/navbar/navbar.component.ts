import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PdtService } from '../services/pdts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

Category:any;
selected:null;
  constructor(private pdtService:PdtService,private route:Router)
    {
      this.pdtService.getAllCategory().subscribe(data=>{
        this.Category=data;
      })
    }

 showDetails1(id:number)
 {
 console.log("Id given is "+id);
 this.route.navigate(["DetailsOfCategory",id]);

 }

  ngOnInit(): void {
  }

}
