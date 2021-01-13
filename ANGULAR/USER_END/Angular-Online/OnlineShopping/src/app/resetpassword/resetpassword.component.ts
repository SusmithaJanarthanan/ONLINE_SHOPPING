// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-resetpassword',
//   templateUrl: './resetpassword.component.html',
//   styleUrls: ['./resetpassword.component.css']
// })
// export class ResetpasswordComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { ResetPassword } from '../models/resetpassword.model';

import * as CryptoJS from 'crypto-js';
import { ForgetPasswordService } from '../services/forgetpassword.service';
import { Users } from '../models/user.model';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {


  resetForm: FormGroup;
  submitted = false;
  urlData:any;
  data:Users;
  localStorageToken:any="";
  constructor(private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private r:Router,
    private FP:ForgetPasswordService) {
      this.data=new Users();
      this.resetForm=this.formBuilder.group({});
        // var decryptedLocalStorageToken=CryptoJS.AES.decrypt("U2FsdGVkX19H7VuML8dP8bjbhopfQpTPWVUvyn7qJ/4=","Hi,Django,Thisisthekeyforencryptingtoken");
        // console.log(decryptedLocalStorageToken.toString(CryptoJS.enc.Utf8));

     }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      newPass: ['', Validators.required],
      confirmPass: ['', Validators.required],
  });

  this.router.queryParams.subscribe(params => {
    // console.log(params);
    this.urlData=params;
  });
  }

  get f() { return this.resetForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.resetForm.invalid || this.resetForm.value.newPass != this.resetForm.value.confirmPass) {
        alert("Invalid Entry");
        return;
      }

      // if(localStorage.getItem("returedID") === null || localStorage.getItem("returedToken") === null){
      //   alert("Access Denied ");
      //   // console.log(localStorage.getItem("returnedID"));
      //   return;
      // }
      //AES-Decryption
      //Decrypting local storage token
      this.localStorageToken = localStorage.getItem("returnedToken")?.toString();
      var decryptedLocalStorageToken=CryptoJS.AES.decrypt(this.localStorageToken,"Hi,Django,Thisisthekeyforencryptingtoken");
      console.log(this.localStorageToken+"---"+decryptedLocalStorageToken.toString(CryptoJS.enc.Utf8));
      console.log(this.urlData.id);
      console.log(this.urlData.token);
      console.log(this.urlData.id==localStorage.getItem("returnedID"));
      console.log(this.urlData.token==decryptedLocalStorageToken.toString(CryptoJS.enc.Utf8));


      if(this.urlData.id==localStorage.getItem("returnedID") && this.urlData.token==decryptedLocalStorageToken.toString(CryptoJS.enc.Utf8)){

        this.data.User_Id=this.urlData.id;
        this.data.User_Password=this.resetForm.value.newPass;
        this.FP.savePass(this.data).subscribe(data=>{alert("password changed")},
          err=>{alert(err.err.message+"errors")});
          this.r.navigate(['/Login']);


      }
      else{
        alert("Access Denied");
        localStorage.clear();
      }

  }


}
