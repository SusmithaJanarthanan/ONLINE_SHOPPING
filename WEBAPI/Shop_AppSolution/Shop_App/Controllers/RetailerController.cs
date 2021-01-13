using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Shop_App.Models;

using System.Web.Http.Cors;

namespace Shop_App.Controllers
{
    [EnableCors(origins: "http://localhost:4300", headers: "*", methods: "*")]
    public class RetailerController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();
        [HttpGet]
        [Route("api/Retailer/all")]
        public IEnumerable<Retailer> Get()
        {
            return entities.Retailers.ToList();
        }
        [HttpPut]
        [Route("api/Retailer/changepass")]
        public HttpResponseMessage changePass(Retailer retailer)
        {
            try
            {
                Retailer ret = entities.Retailers.Where(u => u.Retail_Id == retailer.Retail_Id).FirstOrDefault();
                if (ret != null)
                {
                    ret.Retail_Password = retailer.Retail_Password;
                    entities.SaveChanges();
                }
                else
                {
                   return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "retailer Does Not Exist");

                }
            }
            catch(Exception)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Error Occured");

            }
            return Request.CreateResponse(HttpStatusCode.Created, retailer);


        }
        //[HttpGet]
        //[Route("api/Retailer/revenue/{id}")]
        //public IEnumerable< retailer_revdetails_Result> Retailer_Tally(int id)
        //{
        //    //
        //    List<retailer_revdetails_Result> Retailer_Orders = new List<retailer_revdetails_Result>();
        //    Retailer_Orders = entities.retailer_revdetails(id).ToList();
           
        //    return Retailer_Orders.ToList();

        //}
  
        [HttpGet]
        [Route("api/Retailer/details/{id}")]
        public HttpResponseMessage Retailerdetail(int id)
        {
             Retailer retailer = entities.Retailers.Where(u => u.Retail_Id == id).FirstOrDefault();
                if(retailer != null)
                {
                    return Request.CreateResponse(HttpStatusCode.Created, retailer);
                }
         else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "retailer Does Not Exist");
            }
            
        }

        [HttpPost]
        public HttpResponseMessage AddRetailer(Retailer retailer)
        {
            try
            {
                retailer.Retail_Status = "waiting";
                entities.Retailers.Add(retailer);
                entities.SaveChanges();
            }
            catch (Exception)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Email Already Exists.Enter a new one");
            }

            return Request.CreateResponse(HttpStatusCode.Created, retailer);

        }
        [HttpDelete]
        public HttpResponseMessage DeleteRetailer(int id)
        {
            try
            {
                Retailer retailer = entities.Retailers.Where(u => u.Retail_Id == id).FirstOrDefault();
               List <Product> pdt = entities.Products.Where(u => u.Retail_Id == id).ToList();
              List  <Update_Products> updateproduct = entities.Update_Products.Where(u => u.Retail_Id == id).ToList();
                if (retailer != null)
                {
                    retailer.Retail_Status = "Deleted";
                    entities.SaveChanges();
                }
                if (pdt != null) {
                    foreach(Product p in pdt)
                    {
                        p.Prod_Status = "Deleted";
                        entities.SaveChanges();
                    }
                }
                if(updateproduct !=null)
                { 
                    foreach(Update_Products pd in updateproduct)
                    {
                        entities.Update_Products.Remove(pd);
                    }
                }
                entities.SaveChanges();
            }
            catch (Exception)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Error");
            }

            return Request.CreateResponse(HttpStatusCode.Created, "Successfully Deleted");

        }
     

    }
}
