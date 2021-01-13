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

    public class ProductController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();

        public IEnumerable<Product> Get()
        {
            return entities.Products.ToList();
        }
        [HttpGet]
        [Route("api/Product/{id}")]
        public HttpResponseMessage Producrdetail(int id)
        {
            Product product = entities.Products.Where(u => u.Prod_Id == id).FirstOrDefault();
             if (product != null)
            {
                return Request.CreateResponse(HttpStatusCode.Created, product);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Product Does Not Exist");
            }

        }

        [HttpPost]
        [Route("api/Product/add")]
        public HttpResponseMessage AddProduct(Product product)
        {
            try
            {
                product.Prod_Status = "pending";
                entities.Products.Add(product);
                entities.SaveChanges();
            }
            catch (Exception)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Error Occcured");
            }

            return Request.CreateResponse(HttpStatusCode.Created, product);

        }
        [HttpPost]
        [Route("api/Product/update")]
        public HttpResponseMessage UpdateProduct(Update_Products product)
        {
            try
            {
               // product.Update_Status = "waiting";

                entities.Update_Products.Add(product);
                entities.SaveChanges();
            }
            catch (Exception)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Error Occcured");
            }

            return Request.CreateResponse(HttpStatusCode.Created, product);

        }
        [HttpGet]
        //delete product
        [Route("api/Product/retailer/{id}")]
        public HttpResponseMessage Retailerdetail(int id)
        {
            List<Product> retailer_pdt = entities.Products.Where(u => u.Retail_Id == id && u.Prod_Status == "approved").ToList();
            if (retailer_pdt != null)
            {
                return Request.CreateResponse(HttpStatusCode.Created, retailer_pdt);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "retailer Does Not Exist");
            }

        }




    }
}
