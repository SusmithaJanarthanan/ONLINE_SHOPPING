import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {UserService} from '../app/services/user.service';
import {User} from '../app/models/user.model';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component'
import { ProductService } from './services/product.service';
import { RetailerComponent } from './retailer/retailer.component';
import { OrderComponent } from './order/order.component';
import { RetailerService } from './services/retailer.service';

import { ChangeRetailerStatusComponent } from './change-retailer-status/change-retailer-status.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddNewRetailerComponent } from './add-new-retailer/add-new-retailer.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewProductService } from './services/newProduct.service';
import { EditNewRequestComponent } from './edit-new-request/edit-new-request.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './services/category.service';
import { AddCategoryComponent } from './add-category/add-category.component';
import { LoginComponent } from './login/login.component';

//import { AuthGuardService } from './services/auth-guard.service';


var myRoutes:Routes=[
     {path:"users",component:UserComponent},
     {path:"products",component:ProductComponent},
     {path:"retails",component:RetailerComponent},
     {path:"editProduct/:id",component:UpdateProductComponent},
     {path:"update/:id",component:ChangeRetailerStatusComponent},
     {path:"newProd",component:NewProductComponent},
     {path:"editNewProd/:id",component:EditNewRequestComponent},
     {path:"category",component:CategoryComponent},
     {path:"addCategory",component:AddCategoryComponent},
     {path:"addRetailer",component:AddNewRetailerComponent},
     {path:"",component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    RetailerComponent,
    OrderComponent,
    ChangeRetailerStatusComponent,
    UpdateProductComponent,
    AddNewRetailerComponent,
    NewProductComponent,
    EditNewRequestComponent,
    CategoryComponent,
    AddCategoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [UserService,ProductService,RetailerService,NewProductService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }