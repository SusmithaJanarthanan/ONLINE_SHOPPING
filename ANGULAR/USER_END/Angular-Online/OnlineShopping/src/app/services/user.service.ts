
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Users} from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private getHttp:HttpClient)
  {

  }

  public addUser(user:Users)
  {
    console.log(user);
      return this.getHttp.post("http://localhost:61535/api/User/AddingUser",user);
  }

  public getAllUsers()
  {
      return this.getHttp.get("http://localhost:61535/api/User/all");
  }
  public loginUser(user:Users)
    {
      return this.getHttp.post("http://localhost:61535/api/Login",user);
  }
  public getUserPersonal(id:number)
  {
      return this.getHttp.get("http://localhost:61535/api/User/details/"+id);
  }
  public ChangePass(user:Users)
  {
      return this.getHttp.put("http://localhost:61535/api/User/changepass",user);
  }

}
