export class Wishlist
{
    Wishlist_Id:number;
    User_Id:number;
    Prod_Id:number;

    constructor(Wishlist_Id:number=0,User_Id:number=0,Prod_Id:number=0)
    {
        this.Wishlist_Id=Wishlist_Id;
        this.User_Id=User_Id;
        this.Prod_Id=Prod_Id;

    }
}
