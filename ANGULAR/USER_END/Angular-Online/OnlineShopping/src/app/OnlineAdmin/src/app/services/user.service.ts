import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable()
export class UserService{

    constructor(private httpClient:HttpClient){
    }

    public ViewUsers(){
        return this.httpClient.get("http://localhost:59193/api/Users");
    }

}