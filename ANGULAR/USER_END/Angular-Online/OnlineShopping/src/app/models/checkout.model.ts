export class CheckOut
{
 Cart_Id:number;
 Order_Id:number;
 User_Id:number;
 Product_name:string;
 Product_Price:number;
//  Product_Quantity:number;

  constructor(Cart_Id:number=0,Order_Id:number=0,User_Id:number=0,Product_name:string="",Product_Price:number=0,Product_Quantity:number=0)
  {
    this.Cart_Id=Cart_Id;
    this.Order_Id=Order_Id
    this.User_Id=User_Id;
    this.Product_name=Product_name;
    this.Product_Price=Product_Price;
    // this.Product_Quantity=Product_Quantity;
  }
}