import { Component } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router'; 
import { CookieService } from 'ngx-cookie-service'; 
import { authService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopAppFrontEnd';
  logintoggle:boolean;
  login:boolean;
  user:string;
  constructor(private router: Router, public activatedRoute: ActivatedRoute,private cookieService:CookieService,private authservice:authService) {
    this.user=this.cookieService.get('username');
   // console.log(this.user);
    }
 
   

  logout(): void {
    this.router.navigate(['']);
    this.cookieService.deleteAll();
    this.authservice.isLogged=false;
    
  }
}
