import {HttpClient} from '@angular/common/http';
import {  Injectable } from '@angular/core';

@Injectable()
export class PdtService
{
  constructor(private getHttp:HttpClient,private getone:HttpClient,private getCat:HttpClient,private getoneCat:HttpClient)
  {

  }
  public getAllPdts()
  {
    return this.getHttp.get("http://localhost:61535/api/Products/GetAllProd");
  }
  public getOnePdtFromApi(id:number)
{
return this.getone.get("http://localhost:61535/api/Products/GetProd/"+id);
}
public getAllCategory()
{
  return this.getCat.get("http://localhost:61535/api/Category/GetAllCat");
}
public getPdtOfOneCategory(id:number)
{
  return this.getoneCat.get("http://localhost:61535/api/Category/GetOnePdtFrmCat/"+id);
}
}

