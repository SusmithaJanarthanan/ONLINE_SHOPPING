using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Shop_App.Models;


namespace Shop_App.Controllers
{
    [EnableCors(origins: "http://localhost:4300", headers: "*", methods: "*")]
    public class RetailRevenueController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();
        [HttpGet]
        [Route("api/RetailRevenue/amount/{id}")]
        public HttpResponseMessage Retailer_Amount(int id)
        {
          
            decimal price = 0;
            List<retailer_revdetails_Result> Retailer_Orders = new List<retailer_revdetails_Result>();
            Retailer_Orders = entities.retailer_revdetails(id).ToList();
            foreach (retailer_revdetails_Result item in Retailer_Orders)
            {
                price = price + item.Total.Value;


            }
             if (Retailer_Orders != null)
            {
                return Request.CreateResponse(HttpStatusCode.Created, price);
            }

            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "retailer Does Not Exist");
            }

        }
        [HttpGet]
        [Route("api/RetailRevenue/revenue/{id}")]
        public HttpResponseMessage Retailer_Tally(int id)
        {
            List<retailer_revdetails_Result> Retailer_Orders = new List<retailer_revdetails_Result>();
            Retailer_Orders = entities.retailer_revdetails(id).ToList();
            if (Retailer_Orders != null)
            {
                return Request.CreateResponse(HttpStatusCode.Created, Retailer_Orders);
            }

            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "retailer Does Not Exist");
            }
        }
        [HttpGet]
        [Route("api/RetailRevenue/productstatus/{id}")]
        public HttpResponseMessage Product_Status(int id)
        {
            
                List<Product> prodstatus = new List<Product>();
                prodstatus = entities.Products.Where(u => u.Retail_Id == id).ToList();
            
            if (prodstatus != null)
            {
                return Request.CreateResponse(HttpStatusCode.Created, prodstatus);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "retailer Does Not Exist");
            }


        }
        [HttpGet]
        [Route("api/RetailRevenue/updatestatus/{id}")]
        public HttpResponseMessage update_status(int id)
        {
            List<Update_Products> upd_pdt = new List<Update_Products>();
            upd_pdt = entities.Update_Products.Where(u => u.Retail_Id == id).ToList();
            if(upd_pdt !=null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, upd_pdt);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "retailer Does Not Exist");
            }
        }
       
    }
}
