import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { authService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
retailer:any;
  constructor(public auth: authService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
