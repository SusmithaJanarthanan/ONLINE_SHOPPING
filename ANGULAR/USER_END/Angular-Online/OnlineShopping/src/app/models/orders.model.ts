export class Orders
{
 Order_Id:number;
 User_Id:number;
 Product_Name:string;
 Product_Price:number;
 Product_Quantity:number;
 Product_Image:any;

  constructor(Order_Id:number=0,User_Id:number=0,Product_Name:string="",
  Product_Price:number=0,Product_Quantity:number=0,Product_Image:any="")
  {
    this.Order_Id=Order_Id;
    this.User_Id=User_Id;
    this.Product_Name=Product_Name;
    this.Product_Price=Product_Price;
    this.Product_Quantity=Product_Quantity;
    this.Product_Image=Product_Image;
  }
}