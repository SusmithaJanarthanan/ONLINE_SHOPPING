import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})



export class AddCategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService,private router:Router) { }



  ngOnInit(): void {
  }



  AddCategory(data){
    console.log(data);
    this.categoryService.AddCategory(data).subscribe((result)=>{
      console.log("result",result)
    });
    alert("added successfully")
    this.router.navigate(['/category']);
  }

  

}
