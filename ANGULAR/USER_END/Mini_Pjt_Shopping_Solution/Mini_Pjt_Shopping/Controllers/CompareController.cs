using Mini_Pjt_Shopping.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Mini_Pjt_Shopping.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CompareController : ApiController
    {
        Final_Shopping_dbEntities entities = new Final_Shopping_dbEntities();
        [HttpGet]
        [ActionName("GetCompList")]
        public HttpResponseMessage GetComparelist(int id)
        {
            List<Product> prodlist = new List<Product>();
            var res = entities.GetComparelist(id).ToList();

            foreach (var item in res.ToList())
            {
                Product pdt = entities.Products.Where(p => p.Prod_Id == item.Prod_Id).FirstOrDefault();
                if(pdt.Prod_Status=="approved")
                {
                    prodlist.Add(new Product { Category_Id = pdt.Category_Id, Prod_Id = pdt.Prod_Id, Prod_Name = pdt.Prod_Name, Prod_Price = pdt.Prod_Price, Prod_Quantity = pdt.Prod_Quantity, Prod_Description = pdt.Prod_Description, Prod_Image = pdt.Prod_Image });
                }              

            }
            return Request.CreateResponse(HttpStatusCode.OK, prodlist);
        }

        [HttpPost]
        [ActionName("AddCompList")]
        public HttpResponseMessage AddToComparelist(Compare cmp)
        {
            int count = 0;
            List<Compare> cmplist = new List<Compare>();
            var res = entities.GetComparelist(cmp.User_Id).ToList();
            Product cat = entities.Products.Where(w => w.Prod_Id == cmp.Prod_Id).FirstOrDefault();
            var cat_id = cat.Category_Id;
            Nullable<int> cat_id1 = 0;
            foreach (var item in res)
            {
                cmplist.Add(new Compare { User_Id = item.User_Id, Prod_Id = item.Prod_Id });
                cat_id1 = item.Category_Id;
                count++;
            }
            Compare cmp1 = entities.Compares.Where(w => w.User_Id == cmp.User_Id && w.Prod_Id == cmp.Prod_Id).FirstOrDefault();
            if (cmp1 != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, "Already Present in Comparelist");
            }
            else
            {
                if (count == 4)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, "Max of 4 products at a time");
                }
                if (cat_id == cat_id1)
                {
                    entities.AddToCompare(cmp.User_Id, cmp.Prod_Id, cat_id);
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "Added to Comparelist");
                }
                else if (cat_id1 == 0)
                {
                    entities.AddToCompare(cmp.User_Id, cmp.Prod_Id, cat_id);
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "Added to Comparelist");
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.OK, "Only same Category Product allowed");
                }
            }
        }

        [HttpPut]
        [ActionName("RemoveCompList")]
        public HttpResponseMessage DelWishItem(int id, Compare cmp)
        {
            Compare cmp1 = entities.Compares.Where(u => u.User_Id == id && u.Prod_Id == cmp.Prod_Id).FirstOrDefault();
            if (cmp1 != null)
            {
                entities.Compares.Remove(cmp1);
                entities.SaveChanges();
            }
            else
                return Request.CreateResponse(HttpStatusCode.Accepted, "Not Present in Comparelist");

            return Request.CreateResponse(HttpStatusCode.OK, "Product Removed From Comparelist");
        }


    }

}

