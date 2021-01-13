import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { authService } from '../services/auth.service';

@Component({
  selector: 'app-nameheader',
  templateUrl: './nameheader.component.html',
  styleUrls: ['./nameheader.component.css']
})
export class NameheaderComponent implements OnInit {
  name:string;
    constructor(private cookieService: CookieService,private router:Router,private authService:authService) {
      this.name=this.cookieService.get('username');

    console.log(this.name);

     }

    ngOnInit(): void {
    }
    logout(): void {
      this.router.navigate(['']);
      this.cookieService.deleteAll();
      this.authService.isLogged=false;
    }

  }
