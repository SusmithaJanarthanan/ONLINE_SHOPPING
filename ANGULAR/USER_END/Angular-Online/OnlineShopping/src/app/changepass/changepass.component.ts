import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Dummy } from '../models/dummy.model';
import { Users } from '../models/user.model';
import { authService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  user:Users;
  dummy:Dummy
  dummy1:Dummy;
  password?:string;
  userdetails:any;
  msg:any;


  constructor(private cookieservice:CookieService,private userservie:UserService ,private router:Router,private authservice:authService) {
    this.user=new Users();
    this.dummy=new Dummy();
    this.dummy1=new Dummy();

   }
   Add()
   {
     this.user.User_Id=parseInt(this.cookieservice.get('userid'));
     this.userservie.ChangePass(this.user).subscribe(u=>{this.userdetails = u;alert('Password Changed Successfully')},
      err=>this.msg = err.error.Message);
      this.logOut();
      this.router.navigate(["Login"]);

   }
   logOut()
   {
    
    this.cookieservice.delete('userid');
    this.cookieservice.delete('username');
    this.cookieservice.delete('password');
    this.authservice.isLogged=false;
     window.location.reload();
   }
   check(val: { value: string; }){
    this.password=this.cookieservice.get('password');
    if (val.value !== this.password){

      return true;

    }
    return false;
  }
  comparepass(p1: { value: any; },p2: { value: any; })
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
