import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MyProfileService
{
  constructor(private getHttp:HttpClient)
  {

  }
  public getMyProfile(id:number)
  {
    return this.getHttp.get("http://localhost:61535/api/userprofile/MyProfile/"+id);
  }
}
