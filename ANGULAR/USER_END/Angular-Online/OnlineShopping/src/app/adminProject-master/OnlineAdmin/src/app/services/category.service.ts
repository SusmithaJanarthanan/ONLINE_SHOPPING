import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Category } from "../models/category.model";

@Injectable()
export class CategoryService{

    constructor(private httpClient:HttpClient){
    }

    public ViewCategories(){
        return this.httpClient.get("http://localhost:59193/api/Categories");
    }

    public AddCategory(category:Category){
        return this.httpClient.post("http://localhost:59193/api/Categories",category);
    }

    public DeleteCategory(id:number){
        return this.httpClient.delete("http://localhost:59193/api/Categories/"+id);
    }

}