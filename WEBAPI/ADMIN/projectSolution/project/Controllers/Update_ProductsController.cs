using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using project.Models;

namespace project.Controllers
{
    [EnableCors(origins: "http://localhost:4400", methods: "*", headers: "*")]
    public class Update_ProductsController : ApiController
    {
        private Final_Shopping_dbEntities db = new Final_Shopping_dbEntities();

        // GET: api/Update_Products
        public IQueryable<Update_Products> GetUpdate_Products()
        {
            return db.Update_Products;
        }

        // GET: api/Update_Products/5
        [ResponseType(typeof(Update_Products))]
        public IHttpActionResult GetUpdate_Products(int id)
        {
            Update_Products update_Products = db.Update_Products.Find(id);
            if (update_Products == null)
            {
                return NotFound();
            }

            return Ok(update_Products);
        }

        // PUT: api/Update_Products/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutUpdate_Products(int id, Update_Products update_Products)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != update_Products.Update_Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(update_Products).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!Update_ProductsExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        public HttpResponseMessage Put(int id, [FromBody] Update_Products client)
        {
            try
            {
                Update_Products update_Products = db.Update_Products.Find(id);
                Product prod = db.Products.Find(update_Products.Prod_Id);
                
                update_Products.Update_Status = client.Update_Status;
                if (client.Update_Status == "approve")
                {
                    prod.Prod_Quantity =update_Products.Prod_Quantity + prod.Prod_Quantity;
                    prod.Prod_Price = update_Products.Prod_Price;
                    
                    db.SaveChanges();
                }
                else if (client.Update_Status == "delete")
                {
                    prod.Prod_Quantity = 0;
                    update_Products.Update_Status = client.Update_Status;
                    db.SaveChanges();
                }

                db.SaveChanges();
                
                // update client in database for this clientId
                var returnMessage = Request.CreateResponse(HttpStatusCode.Created, update_Products);
                returnMessage.Headers.Location = new Uri(Request.RequestUri + "/" + update_Products.Update_Id.ToString());
                return returnMessage;
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        // POST: api/Update_Products
        [ResponseType(typeof(Update_Products))]
        public IHttpActionResult PostUpdate_Products(Update_Products update_Products)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Update_Products.Add(update_Products);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = update_Products.Update_Id }, update_Products);
        }

        // DELETE: api/Update_Products/5
        [ResponseType(typeof(Update_Products))]
        public IHttpActionResult DeleteUpdate_Products(int id)
        {
            Update_Products update_Products = db.Update_Products.Find(id);
            if (update_Products == null)
            {
                return NotFound();
            }

            db.Update_Products.Remove(update_Products);
            db.SaveChanges();

            return Ok(update_Products);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Update_ProductsExists(int id)
        {
            return db.Update_Products.Count(e => e.Update_Id == id) > 0;
        }
    }
}