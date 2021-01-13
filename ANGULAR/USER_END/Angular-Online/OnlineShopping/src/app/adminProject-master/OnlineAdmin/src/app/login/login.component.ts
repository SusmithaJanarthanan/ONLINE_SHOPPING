import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string;
  password:string;
  constructor(private rt:Router) { }

  ngOnInit(): void {
  }

  adminLogin(){
    if(this.name=="admin" && this.password=="admin"){
    // console.log(this.name);
    alert("welcome !!!")
    this.rt.navigate(['/users'])
    }
    else{
      alert("invalid lodin details !!!")
    }
  }

}
