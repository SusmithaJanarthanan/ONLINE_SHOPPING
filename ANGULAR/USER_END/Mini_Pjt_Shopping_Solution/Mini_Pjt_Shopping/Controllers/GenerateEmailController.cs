using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Net.Mail;
using Mini_Pjt_Shopping.Models;

namespace Mini_Pjt_Shopping.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class GenerateEmailController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();
        [HttpPost]
        [Route("api/GenerateEmail")]
       
        public HttpResponseMessage forgetPassword_Send_Mail(User u)
        {         

            User user = entities.Users.Where(t => t.User_Email == u.User_Email).FirstOrDefault();
            if (user == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid ID");
            }
            else
            {
                var token = Guid.NewGuid().ToString();
                MailAddress to = new MailAddress(user.User_Email);
                MailAddress from = new MailAddress("sridharshinisathvika@gmail.com");

                MailMessage message = new MailMessage(from, to);
                message.Subject = "Testing Mail";
                message.IsBodyHtml = true;
                //string url = "http:/localhost:4200/ResetPassword?id=" + student.STUID + "&token=" + token;
                message.Body = "Reseting <a href='http:/localhost:4200/ResetPassword?id=" + user.User_Id + "&token=" + token + "' >Click!</a>";

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
                list.Add(Convert.ToString(user.User_Id));
                list.Add(token);

                return Request.CreateResponse<List<string>>(HttpStatusCode.OK, list);
            }
        }
        [HttpPut]
        [Route("api/GenerateEmail/save")]
        public HttpResponseMessage savePassword(User n)
        {
            User ret = entities.Users.Where(t => t.User_Id == n.User_Id).FirstOrDefault();
            if (ret == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Data cannot be found");
            }
            else
            {
                ret.User_Password = n.User_Password;
                entities.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, "1");
            }

        }
    }
}
