import { Component, OnInit } from '@angular/core';
import {  Users} from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
 import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { authService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:Users;
user1:any;
msg:any;
Username="";
Password="";

  constructor(private authservice:authService,private loginservice:UserService, private router: Router,
    public activatedRoute: ActivatedRoute, private cookieService: CookieService) {
    this.user=new Users();
  }

  ngOnInit(): void {
  }

  onSubmit() {

          this.loginservice.loginUser(this.user).subscribe(
          data => {
          this.user1 = data; // able to print the data
          JSON.stringify(this.user1);
          this.processResults();
          // this.cookieService.set('username', this.user1.User_Name);
        },
          err=>this.msg = err.error.Message);
    }

  processResults() {
      console.log(this.user1.User_Id);
      this.authservice.userid=this.user1.User_Id;

      console.log(this.authservice.userid);
      console.log(this.user1.User_Id);
      console.log(this.user1.User_Name);

      this.cookieService.set('username', this.user1.User_Name);
      this.cookieService.set('password', this.user1.User_Password);
      this.cookieService.set('userid',this.user1.User_Id);

      this.authservice.isLogged=true;
      this.refre();
      this.router.navigate(['/Products']);
  }
refre()
{
alert("LoggedIn Succesfully");
window.location.reload();
}

  Sign_Up()
  {
    this.router.navigate(['/SignUp']);

  }


}

















