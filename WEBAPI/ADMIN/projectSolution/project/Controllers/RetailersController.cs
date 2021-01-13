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
    [EnableCors(origins: "http://localhost:4400", methods:"*",headers:"*")]
    public class RetailersController : ApiController
    {

        private Final_Shopping_dbEntities db = new Final_Shopping_dbEntities();

        // GET: api/Retailers
        public IQueryable<Retailer> GetRetailers()
        {
            return db.Retailers;
        }

        // GET: api/Retailers/5
        [ResponseType(typeof(Retailer))]
        public IHttpActionResult GetRetailer(int id)
        {
            Retailer retailer = db.Retailers.Find(id);
            if (retailer == null)
            {
                return NotFound();
            }

            return Ok(retailer);
        }

        // PUT: api/Retailers/5
        [ResponseType(typeof(void))]
        //public IHttpActionResult PutRetailer(int id, Retailer retailer)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != retailer.Retail_Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(retailer).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!RetailerExists(id))
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
        public HttpResponseMessage Put(int id, [FromBody] Retailer client)
        {
            try
            {
                Retailer c = db.Retailers.Find(id);
               
                c.Retail_Name = client.Retail_Name;
                c.Company_Name = client.Company_Name;
                c.Retail_Phone = client.Retail_Phone;
                c.Retail_Email = client.Retail_Email;
                c.Retail_Password = client.Retail_Password;
                c.Retail_Status = client.Retail_Status;
                db.SaveChanges();
                // update client in database for this clientId
                var returnMessage = Request.CreateResponse(HttpStatusCode.Created, c);
                returnMessage.Headers.Location = new Uri(Request.RequestUri + "/" + c.Retail_Id.ToString());
                return returnMessage;
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
        // POST: api/Retailers
        [ResponseType(typeof(Retailer))]
        //public IHttpActionResult PostRetailer(Retailer retailer)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Retailers.Add(retailer);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = retailer.Retail_Id }, retailer);
        //}
        public void post([FromBody] Retailer retailer)
        {
            Retailer ret = new Retailer();
            ret.Retail_Name = retailer.Retail_Name;
            ret.Retail_Password = retailer.Retail_Name;
            ret.Company_Name = retailer.Company_Name;
            ret.Retail_Phone = retailer.Retail_Phone;
            ret.Retail_Email = retailer.Retail_Email;
            ret.Retail_Status = retailer.Retail_Status;
            

          
                db.Retailers.Add(ret);
                db.SaveChanges();
            }
            




        // DELETE: api/Retailers/5
        [ResponseType(typeof(Retailer))]
        public IHttpActionResult DeleteRetailer(int id)
        {
            Retailer retailer = db.Retailers.Find(id);
            if (retailer == null)
            {
                return NotFound();
            }

            retailer.Retail_Status = "Deleted";
            db.SaveChanges();

            return Ok(retailer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RetailerExists(int id)
        {
            return db.Retailers.Count(e => e.Retail_Id == id) > 0;
        }
    }
}