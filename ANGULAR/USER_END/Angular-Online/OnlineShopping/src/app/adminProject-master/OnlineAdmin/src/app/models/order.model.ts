export class Order{
    Order_Id:number;
    User_id:number;
    Prod_id:number;
    Prod_Price:number;
    Prod_Quantity:number;
    Retail_id:number;

    constructor(Order_Id:number=0,User_id:number=0,Prod_id:number=0,Prod_Price:number=0,Prod_Quantity:number=0, Retail_id:number=0){
      this.Order_Id=Order_Id;
      this.User_id=User_id;
      this.Prod_id=Prod_id;
      this.Prod_Price=Prod_Price;
      this.Prod_Quantity=Prod_Quantity;
      this.Retail_id=Retail_id
    }
}