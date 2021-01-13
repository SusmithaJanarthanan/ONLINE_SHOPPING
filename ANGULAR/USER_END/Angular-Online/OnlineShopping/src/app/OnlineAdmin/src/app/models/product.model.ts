
export class Product{
    Prod_Id:number;
    Category_Id:number;
    Prod_Name:string;
    Prod_Price:number;
    Prod_Description:string;
    Prod_Quantity:number;
    Prod_Status:string;
    Retail_Id:number;

    constructor (Prod_Id:number=0,Category_Id:number=0,Prod_Name:string="",Prod_Price:number=0,Prod_Description:string="",Prod_Quantity:number=0,Prod_Status:string="",Retal_Id:number=0){
        this.Prod_Id=Prod_Id;
        this.Category_Id=Category_Id;
        this.Prod_Name=Prod_Name;
        this.Prod_Quantity=Prod_Quantity;
        this.Prod_Price=Prod_Price;
        this.Prod_Description=Prod_Description;
        this.Prod_Status=Prod_Status;
        this.Retail_Id=this.Retail_Id;

    }
}