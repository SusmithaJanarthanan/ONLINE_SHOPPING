import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories:any;

 
constructor(private categoryService:CategoryService,private router:Router) { 
    this.categoryService.ViewCategories().subscribe(custs=>{
      this.categories = custs;
    })
  }


  
  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(["../users"])
  }

  
  
  ViewCategories(){
    this.categoryService.ViewCategories().subscribe(custs=>{
      this.categories = custs;
    })
  }

  
  
  DeleteCategory(j){
    //console.log(j);
    this.categoryService.DeleteCategory(j).subscribe(data=>{
    alert("deleted success");
    this.ViewCategories();
    })
  }

}
