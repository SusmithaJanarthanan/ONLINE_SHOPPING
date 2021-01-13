export class Retailer{
    
    Retail_Id:number;
    Company_Name:string;
     Retail_Name:string;
     Retail_Password:string;
     Retail_Phone:string;
     Retail_Email:string;
     

    constructor(Retail_Id:number=0,Company_Name:string="",Retail_Name:string="",Retail_Password:string="",
    Retail_Phone:string="",Retail_Email:string="")
      {
        this.Retail_Id=Retail_Id;
        this.Company_Name=Company_Name;
        this.Retail_Name=Retail_Name;
        this.Retail_Password=Retail_Password;
        this.Retail_Phone=Retail_Phone;
        this.Retail_Email=Retail_Email;
     
    }
  

}