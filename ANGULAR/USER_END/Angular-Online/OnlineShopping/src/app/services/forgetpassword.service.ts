// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ForgetpasswordService {

//   constructor() { }
// }

import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/user.model';



@Injectable()
export class ForgetPasswordService{
    constructor(private getHttp:HttpClient)
    {

    }
    public sendMail(user:Users){

        return this.getHttp.post("http://localhost:61535/api/GenerateEmail",user);
    }
    public savePass(user:Users){

        return this.getHttp.put("http://localhost:61535/api/GenerateEmail/save",user);
    }
}
