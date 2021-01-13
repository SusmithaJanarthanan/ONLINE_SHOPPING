import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
  users:any;

  
  
  constructor(private userService:UserService,
    private router:Router) { 
    this.userService.ViewUsers().subscribe(custs=>{
      this.users = custs;
    })
  }

  ngOnInit(): void {
  }
   
  goToProducts(){
    this.router.navigate(["../products"])
  }

  goToRetailers(){
    this.router.navigate(["../retails"])
  }

  goToCategories(){
    this.router.navigate(["../category"])
  }

  goToRequests(){
    this.router.navigate(["../newProd"])
  }

  goToOrders(){
    this.router.navigate(["../orders"])
  }

  logout(){
    this.router.navigate([""])
  }

}