export class Users{

     User_Id:number;
     User_Name:string;
     User_Password:string;
     User_Email:string;
     User_Phone:string;
     User_Address:string;
     User_City:string;
     User_Country:string;


    constructor(User_Id:number=0,User_Name:string="",User_Password:string="",User_Email:string="",
    User_Phone:string="",User_Address:string="",User_City:string="",User_Country:string="")
      {
        this.User_Id=User_Id;
        this.User_Name=User_Name;
        this.User_Password=User_Password;
        this.User_Email=User_Email;
        this.User_Phone=User_Phone;
        this.User_Address=User_Address;
        this.User_City=User_City;
        this.User_Country=User_Country;
          }


}
