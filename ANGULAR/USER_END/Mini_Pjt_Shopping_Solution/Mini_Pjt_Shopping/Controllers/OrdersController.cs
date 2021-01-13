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
    public class OrdersController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();
        [ActionName("GetAllOrders")]
        public HttpResponseMessage GetOrders(int id)
        {
            List<Order> orders = new List<Order>();
            var res = entities.sp_getOrders(id).ToList();
            foreach (var item in res.ToList())
            {
                orders.Add(new Order { Order_Id = item.Order_Id, Prod_Quantity = item.Prod_Quantity, Prod_Name = item.Prod_Name, Prod_Price = item.Prod_Price, Prod_Image = item.Prod_Image });

            }
            return Request.CreateResponse(HttpStatusCode.OK, orders);
        }


    }
}
