using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Mini_Pjt_Shopping.Models;

namespace Mini_Pjt_Shopping.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ProductsController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();

        public object Retail_Name { get; private set; }
        public object Category_Name { get; private set; }

        [HttpGet]
        [ActionName("GetAllProd")]
        public HttpResponseMessage GetAllProducts()
        {
            List<Product> pdts = new List<Product>();
            var res = entities.sp_GetAllPdtfromdb().ToList();
            foreach (var item in res.ToList())
            {
                pdts.Add(new Product { Prod_Id = item.Prod_Id, Prod_Name = item.Prod_Name, Prod_Price = item.Prod_Price, Prod_Quantity = item.Prod_Quantity, Prod_Description = item.Prod_Description, Prod_Image = item.Prod_Image,Prod_Status=item.Prod_Status,Retail_Id=item.Retail_Id,Retail_Name=item.Retail_Name,Company_Name=item.Company_Name,Category_Id=item.Category_Id,Category_Name= item.Category_Name});
            }
            return Request.CreateResponse(HttpStatusCode.OK, pdts);
        }

        [ActionName("GetProd")]
        public HttpResponseMessage Get(int id) 
        {
            List<Product> pdts = new List<Product>();
            var res = entities.sp_GetOnePdtfromdb(id).ToList();
            foreach (var item in res.ToList())
            {
                pdts.Add(new Product { Prod_Id = item.Prod_Id, Prod_Name = item.Prod_Name, Prod_Price = item.Prod_Price, Prod_Quantity = item.Prod_Quantity, Prod_Description = item.Prod_Description, Prod_Image = item.Prod_Image, Prod_Status = item.Prod_Status, Retail_Id = item.Retail_Id, Retail_Name = item.Retail_Name, Company_Name = item.Company_Name, Category_Id = item.Category_Id, Category_Name = item.Category_Name });
            }
            return Request.CreateResponse(HttpStatusCode.Created, res);
        }


    }
}
