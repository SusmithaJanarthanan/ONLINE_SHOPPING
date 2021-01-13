using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Mini_Pjt_Shopping.Models;
using System.Data.Entity;

namespace Mini_Pjt_Shopping.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class WishlistController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();

        [ActionName("Items")]
        [HttpGet]
        public HttpResponseMessage GetWishlist(int id)
        {
            List<Product> prodlist = new List<Product>();
            var res = entities.GetWishlist(id).ToList();

            foreach (var item in res.ToList())
            {
                Product pdt = entities.Products.Where(p => p.Prod_Id == item.Prod_Id).FirstOrDefault();
                if(pdt.Prod_Status=="approved")
                {
                    prodlist.Add(new Product { Prod_Id = pdt.Prod_Id, Prod_Name = pdt.Prod_Name, Prod_Price = pdt.Prod_Price, Prod_Image = pdt.Prod_Image });
                }
                     
            }
            return Request.CreateResponse(HttpStatusCode.OK, prodlist);

        }
        [ActionName("Add")]
        [HttpPost]
        public HttpResponseMessage AddToWishlist(Wishlist wish)
        {
            List<Wishlist> wishlist = new List<Wishlist>();
            var res = entities.GetWishlist(wish.User_Id).ToList();
            foreach (var item in res)
            {
                wishlist.Add(new Wishlist { User_Id = item.User_Id, Prod_Id = item.Prod_Id });
            }
            Wishlist wish1 = wishlist.Where(w => w.User_Id == wish.User_Id && w.Prod_Id == wish.Prod_Id).FirstOrDefault();
            if (wish1 != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, "Already Present");
            }
            else
            {
                entities.AddToWishlist(wish.User_Id, wish.Prod_Id);
                entities.SaveChanges();
            }

            return Request.CreateResponse(HttpStatusCode.OK, "Added to wishlist");
        }
        [ActionName("Delete")]
        [HttpPut]
        public HttpResponseMessage DelWishItem(int id, Wishlist wish)
        {
            Wishlist wish1 = entities.Wishlists.Where(u => u.User_Id == id && u.Prod_Id == wish.Prod_Id).FirstOrDefault();
            if (wish1 != null)
            {
                entities.Wishlists.Remove(wish1);
                entities.SaveChanges();
            }
            else
                return Request.CreateResponse(HttpStatusCode.Accepted, "Not Present in Wishlist");

            return Request.CreateResponse(HttpStatusCode.OK, "Product Removed From Wishlist");
        }
    }

}
