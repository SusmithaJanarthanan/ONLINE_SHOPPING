using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Security;
using Mini_Pjt_Shopping.Models;

namespace Mini_Pjt_Shopping.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class LoginController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();
        [HttpPost]       
        public HttpResponseMessage UserLogin(User user)
        {
            User user1 = entities.Users.Where(u => u.User_Email == user.User_Email &&
                                                         u.User_Password == user.User_Password).FirstOrDefault();

            if (user1 != null)
            {
                    FormsAuthentication.SetAuthCookie(user.User_Name, false);
                    return Request.CreateResponse(HttpStatusCode.Accepted, user1);
            }
            else
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Invalid Email or Password");

        }

        [HttpPut]
        [Route("api/User/changepass")]
        public HttpResponseMessage changePass(User user)
        {
            try
            {
              User ret = entities.Users.Where(u => u.User_Id== user.User_Id).FirstOrDefault();
                if (ret != null)
                {
                    ret.User_Password = user.User_Password;
                    entities.SaveChanges();
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "User Does Not Exist");

                }
            }
            catch (Exception)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Error Occured");

            }
            return Request.CreateResponse(HttpStatusCode.Created, user);

        }

    }
}
