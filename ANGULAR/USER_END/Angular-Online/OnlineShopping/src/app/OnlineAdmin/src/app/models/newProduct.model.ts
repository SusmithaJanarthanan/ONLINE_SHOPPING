export class New_Product{
    Update_Id:number;
    Prod_Id:number;
    Prod_Name:string;
    Prod_Price:number;
    Prod_Quantity:number;
    Update_Status:string;
   

    constructor (Prod_Id:number=0,Prod_Name:string="",Prod_Price:number=0,Prod_Quantity:number=0,Update_Status:string="",Update_Id:number=0){
        this.Prod_Id=Prod_Id;
       
        this.Prod_Name=Prod_Name;
        this.Prod_Quantity=Prod_Quantity;
        this.Prod_Price=Prod_Price;
      
        this.Update_Status=Update_Status;
        this.Update_Id=this.Update_Id;

    }
}