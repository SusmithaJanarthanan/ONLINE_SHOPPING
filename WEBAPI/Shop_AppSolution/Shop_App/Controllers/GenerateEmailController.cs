using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Mail;
using Shop_App.Models;
using System.Web.Http.Cors;

namespace Shop_App.Controllers
{
    [EnableCors(origins: "http://localhost:4300", headers: "*", methods: "*")]

    public class GenerateEmailController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();

        [HttpPost]
        [Route("api/GenerateEmail")]
        public HttpResponseMessage forgetPassword_Send_Mail(Retailer re)
        {
            
            Retailer retailer = entities.Retailers.Where(t => t.Retail_Email == re.Retail_Email).FirstOrDefault();
            if (retailer == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid ID");
            }
            else
            {
                var token = Guid.NewGuid().ToString();
                MailAddress to = new MailAddress(retailer.Retail_Email);
                MailAddress from = new MailAddress("sridharshinisathvika@gmail.com");

                MailMessage message = new MailMessage(from, to);
                message.Subject = "Testing Mail";
                message.IsBodyHtml = true;
                //string url = "http:/localhost:4200/ResetPassword?id=" + student.STUID + "&token=" + token;
                message.Body = "Reseting <a href='http:/localhost:4200/ResetPassword?id=" + retailer.Retail_Id + "&token=" + token + "' >Click!</a>";

                SmtpClient client = new SmtpClient("smtp.elasticemail.com", 2525)
                {
                    Credentials = new NetworkCredential("sridharshinisathvika@gmail.com", "456A6BB35195C1204054980BC150D30ECCF3"),
                    EnableSsl = true
                };

                try
                {
                    client.Send(message);

                }
                catch (SmtpException ex)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
                }
                List<string> list = new List<string>();
                list.Add(Convert.ToString(retailer.Retail_Id));
                list.Add(token);

                return Request.CreateResponse<List<string>>(HttpStatusCode.OK, list);
            }
        }
        [HttpPut]
        [Route("api/GenerateEmail/save")]
        public HttpResponseMessage savePassword(Retailer n)
        {
            Retailer ret = entities.Retailers.Where(t => t.Retail_Id == n.Retail_Id).FirstOrDefault();
            if (ret == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Data cannot be found");
            }
            else
            {
                ret.Retail_Password = n.Retail_Password;
                entities.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, "1");
            }

        }

    }
}
