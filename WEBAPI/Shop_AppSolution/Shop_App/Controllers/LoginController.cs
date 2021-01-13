using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Security;
using Shop_App.Models;

namespace Shop_App.Controllers
{
    [EnableCors(origins: "http://localhost:4300", headers: "*", methods: "*")]

    public class LoginController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();

        [HttpPost]
        public HttpResponseMessage RetailerLogin(Retailer user)
        {
            Retailer retailer = entities.Retailers.Where(u => u.Retail_Email == user.Retail_Email && 
                                                         u.Retail_Password == user.Retail_Password).FirstOrDefault();

           if(retailer !=null)
            {
                if(retailer.Retail_Status=="Approved")
                {
                    FormsAuthentication.SetAuthCookie(user.Retail_Name, false);
                    return Request.CreateResponse(HttpStatusCode.Accepted, retailer);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Admin did not approve yet.Wait For the approval");
                }

            }
           else
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Invalid Email or Password");

        }
    }
}
