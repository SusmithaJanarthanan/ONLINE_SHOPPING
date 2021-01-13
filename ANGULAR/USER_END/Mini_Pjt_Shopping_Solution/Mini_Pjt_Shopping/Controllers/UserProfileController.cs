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
    public class UserProfileController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();

        [HttpGet]
        [ActionName("MyProfile")]
        public HttpResponseMessage GetUserDetails(int id)
        {
            List<User> details = new List<User>();
            var res = entities.GetUserDetails(id).ToList();
            foreach (var item in res.ToList())
            {
                details.Add(new User
                {
                    User_Name = item.User_Name,
                    User_Email = item.User_Email,
                    User_Phone = item.User_Phone,
                    User_Address = item.User_Address,
                    User_City = item.User_City,
                    User_Country = item.User_Country
                });
            }
            return Request.CreateResponse(HttpStatusCode.OK, details);
        }
    }
}
