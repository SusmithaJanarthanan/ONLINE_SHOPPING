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
    public class CartController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();


        [ActionName("List")]
        public HttpResponseMessage GetCart(int id)
        {
            List<GetCartItems_Result> prodlist = new List<GetCartItems_Result>();
            var res = entities.GetCartItems1(id).ToList();

            foreach (var item in res.ToList())
            {
                if(item.Prod_Status=="approved")
                {
                   Product pdt = entities.Products.Where(p => p.Prod_Id == item.Prod_Id).FirstOrDefault();
                   prodlist.Add(new GetCartItems_Result { Cart_Id = item.Cart_Id, User_Id = item.User_Id, Prod_Id = pdt.Prod_Id, Prod_Name = pdt.Prod_Name, Prod_Price = item.Prod_Price, Prod_Quantity = item.Prod_Quantity, Prod_Description = pdt.Prod_Description, Prod_Image = pdt.Prod_Image });
                }              

            }
            return Request.CreateResponse(HttpStatusCode.OK, prodlist);
        }
        [ActionName("Add")]
        [HttpPost]
        public HttpResponseMessage AddToCart(Cart cart)
        {
            List<Cart> cartlist = new List<Cart>();
            //var res = entities.Carts.Where(i => i.Cart_Id == cart.Cart_Id).ToList();
            var res = entities.GetCartItems(cart.User_Id).ToList();
            Product pdt = entities.Products.Where(i => i.Prod_Id == cart.Prod_Id).FirstOrDefault();
            Nullable<int> qty = pdt.Prod_Quantity;
            foreach (var item in res)
            {              
               cartlist.Add(new Cart { User_Id = item.User_Id, Prod_Id = item.Prod_Id });
                           
               
            }
            Cart cart1 = entities.Carts.Where(w => w.User_Id == cart.User_Id && w.Prod_Id == cart.Prod_Id).FirstOrDefault();
            if (cart1 != null)
            {
                if(qty>cart1.Prod_Quantity)
                {
                    entities.Carts.Where(w => w.User_Id == cart.User_Id && w.Prod_Id == cart.Prod_Id).FirstOrDefault().Prod_Quantity += 1;
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "Quantity updated in cart");
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.OK, "Stock Limit Reached");
                }
               
            }
            else
            {
                entities.AddTOCart(cart.User_Id, cart.Prod_Id, cart.Prod_Quantity, cart.Prod_Price);
                entities.SaveChanges();
            }

            return Request.CreateResponse(HttpStatusCode.OK, "Added to Cart");
        }
        [ActionName("Delete")]
        [HttpDelete]
        public HttpResponseMessage DelCartItem(int id)
        {
                        Cart item = entities.Carts.Find(id);
            if (item != null)
            {
                entities.Carts.Remove(item);
                entities.SaveChanges();
            }
            else
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Unable to delete data");
            return Request.CreateResponse(HttpStatusCode.OK, "Product Removed From Cart");
        }
        [ActionName("Inc")]
        [HttpPut]
        public HttpResponseMessage IncQty(int id, [FromBody] int inc)
        {
            Cart cat = entities.Carts.Where(i => i.Cart_Id == id).FirstOrDefault();
            Product pdt = entities.Products.Where(i => i.Prod_Id == cat.Prod_Id).FirstOrDefault();
            Nullable<int> qty = pdt.Prod_Quantity;
            if (inc !=-1)
            {
                if (qty > inc && pdt.Prod_Status=="approved"){
                    entities.incQty(id);
                    entities.SaveChanges();
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.OK, "Stock Limit Reached");
                }
            }
            else 
            {
                if(pdt.Prod_Status == "approved")
                {
                    entities.decQty(id);
                    entities.SaveChanges();
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.OK, "Stock Limit Reached");
                }
                
            }

            return Request.CreateResponse(HttpStatusCode.OK, "Quantity updated");
        }

        [ActionName("Total")]
        public HttpResponseMessage Get(int id)
        {
            var total = entities.CalTotal(id);
            return Request.CreateResponse(HttpStatusCode.OK, total);
        }
    }
}



