import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Users } from './models/user.model';
import { authService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OnlineShopping';
  name:any;
  user!:Users;
  id:any;
  constructor(private cookieservice:CookieService,private authservice:authService,private router:Router)
  {
    //  this.name=this.cookieservice.get('username');
    //  this.id=this.cookieservice.get('userid');
    // this.id=this.authservice.userid;
     console.log(this.id);
     console.log(this.authservice.username);
  }

ngOnInit(): void {
     this.name=this.cookieservice.get('username');
     this.id=this.cookieservice.get('userid');

  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}
myorders(id:number)
{
  this.router.navigate(["Orders",id]);
}

myprofile(id:number)
{
  this.router.navigate(["MyProfile",id]);
}



ngAfterViewInit(): void {
}
logout(): void {
  this.router.navigate(['/Home']);
  this.cookieservice.delete('userid');
  this.cookieservice.delete('username');
  this.cookieservice.delete('password');
  this.authservice.isLogged=false;
  window.location.reload();
}

}
