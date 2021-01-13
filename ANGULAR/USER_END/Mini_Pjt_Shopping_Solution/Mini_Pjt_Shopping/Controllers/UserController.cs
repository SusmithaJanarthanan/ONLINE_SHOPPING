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
    public class UserController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();

        [HttpGet]
        [Route("api/User/all")]
        public IEnumerable<User> Get()
        {
            return entities.Users.ToList();
        }

        [HttpPost]
        [ActionName("AddingUser")]
        public HttpResponseMessage AddUser(User user)
        {

            try
            {

                entities.Users.Add(user);
                entities.SaveChanges();
            }
            catch (Exception)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Email Already Exists.Enter a new one");
            }

                return Request.CreateResponse(HttpStatusCode.Created, user);

        }
    }
}
