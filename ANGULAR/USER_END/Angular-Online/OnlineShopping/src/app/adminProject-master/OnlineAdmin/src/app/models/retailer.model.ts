export class Retailer{
    Retail_Id:number;
    Company_Name:string;
    Retail_Name:string;
    Retail_Password:string;
    Retail_Phone:number;
    Retail_Email:string;
    Retail_Status:string;

    constructor (Retail_Id:number=0,Company_Name:string="",Retail_Name:string="",Retail_Password:string="",Retail_Phone:number=0,Retail_Email:string="",Retail_Status:string=""){
      this.Retail_Id=Retail_Id;
      this.Company_Name=Company_Name;
      this.Retail_Password=Retail_Password;
      this.Retail_Name=Retail_Name;
      this.Retail_Email=Retail_Email;
      this.Retail_Phone=Retail_Phone;
      this.Retail_Status=Retail_Status;
}
}
