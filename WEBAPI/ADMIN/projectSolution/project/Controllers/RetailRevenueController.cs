using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using project.Models;

namespace project.Controllers
{
    [EnableCors(origins: "http://localhost:4400", methods: "*", headers: "*")]
    public class RetailRevenueController : ApiController
    {
        private Final_Shopping_dbEntities db = new Final_Shopping_dbEntities();
        [HttpGet]
       
        public decimal Retailer_Amount(int id)
        {

            decimal price = 0;
            List<retailer_revdetails_Result> Retailer_Orders = new List<retailer_revdetails_Result>();
            Retailer_Orders = db.retailer_revdetails(id).ToList();
            foreach (retailer_revdetails_Result item in Retailer_Orders)
            {
                price = price + item.Total.Value;

            }

            return price;

        }
    }
}
