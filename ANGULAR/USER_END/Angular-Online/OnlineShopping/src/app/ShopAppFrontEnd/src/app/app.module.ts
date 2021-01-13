import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { RetailerComponent } from './retailer/retailer.component';
import { RouterModule, Routes } from '@angular/router';
import { RetailerService } from './services/Retailer.service';
import { RetailerRevenueComponent } from './retailer-revenue/retailer-revenue.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CategoryService } from './services/Category.service';
import { AddProductService } from './services/addproducts.service';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UpdateProductService } from './services/updateproduct.service';
import { DecimalPipe } from '@angular/common';
import { AddretailerComponent } from './addretailer/addretailer.component';
import { addRetailerervice } from './services/addretailer.service';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { authService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FrontpageComponent } from './frontpage/frontpage.component';

import { NameheaderComponent } from './nameheader/nameheader.component';
import { ProductstatusComponent } from './productstatus/productstatus.component';
import { DeleteproductsComponent } from './deleteproducts/deleteproducts.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ForgetPasswordService } from './services/forgetpassword';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
   
    RetailerRevenueComponent,
    AddProductsComponent,
    UpdateproductComponent,
    AddretailerComponent,
    LoginComponent,
    FrontpageComponent,
  
    NameheaderComponent,
    ProductstatusComponent,
    DeleteproductsComponent,    
    ChangePasswordComponent,
    
    ForgetpasswordComponent,
    
    ResetpasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule


  ],
  providers: [RetailerService,CategoryService,AddProductService,CookieService,
    UpdateProductService,DecimalPipe,addRetailerervice,authService,AuthGuardService,ForgetPasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
