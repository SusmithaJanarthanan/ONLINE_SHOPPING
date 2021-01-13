// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-forgetpassword',
//   templateUrl: './forgetpassword.component.html',
//   styleUrls: ['./forgetpassword.component.css']
// })
// export class ForgetpasswordComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetPasswordService } from '../services/forgetpassword.service';
import * as CryptoJS from 'crypto-js';
import { Users } from '../models/user.model';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  result:any;
  message:string="";
  user:Users;
  id:any;
  token:any;

  constructor(private formBuilder: FormBuilder,
    private r:Router,
    private forgetPasswordService:ForgetPasswordService) {
      this.registerForm=this.formBuilder.group({});
      this.user=new Users();
      localStorage.setItem("returnedID","");
      localStorage.setItem("returnedToken","");
    }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required]]
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.user.User_Email=this.registerForm.value.userName;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    //Code to send mail
    this.forgetPasswordService.sendMail(this.user).subscribe((data)=>{
      this.result=data,
      this.token=this.result.pop(),
      console.log(this.token),
      this.id=this.result.pop()
     console.log(this.id),
      this.encryptandstore(),
      alert("Mail Sent To Registered E-Mail")
      // localStorage.setItem("returnedID",this.result[0])
      // localStorage.setItem("returnedToken",this.result[1]);
    },err=>alert(err.error.Message));


}
encryptandstore(){
    //AES-Encryption
    // Encrypting local storage token

    // console.log(this.id+"--"+this.token);
    this.token=CryptoJS.AES.encrypt(this.token,"Hi,Django,Thisisthekeyforencryptingtoken");
     console.log(this.token.toString());

    //Setting Local Storage Data
    localStorage.setItem("returnedID",this.id),
    localStorage.setItem("returnedToken",this.token.toString());

}


}



