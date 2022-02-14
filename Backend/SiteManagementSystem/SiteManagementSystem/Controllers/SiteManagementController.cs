using DAL.Model;
using Microsoft.AspNetCore.Mvc;

namespace SiteManagementSystem.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class SiteManagementController : ControllerBase
    {
        //Logger logger = new Logger();  //create a logger class

        //db connection
        DBOperationApartment dbOperationApartment = new DBOperationApartment();
        DBOperationResident dbOperationResident = new DBOperationResident();
        DBOperationInvoicesDues dbOperationInvoicesDues = new DBOperationInvoicesDues();
        DBOperationMessages dbOperationMessages = new DBOperationMessages();


        /*HTTP get request methods*/
        [HttpGet]
        [ActionName("GetApartments")]
        public List<Apartment> GetApartments()
        {
            /*sort profiles according to their ids then convert to list type*/
            //logger.createLog("Get operation: Apartment list is fetched.");
            
            return dbOperationApartment.GetApartment();
        }

        [HttpGet]
        [ActionName("GetResidents")]
        public List<Resident> GetResidents()
        {
            /*sort profiles according to their ids then convert to list type*/
            //logger.createLog("Get operation: Resident list is fetched.");

            return dbOperationResident.GetResident();
        }

        [HttpGet]
        [ActionName("GetInvoicesDues")]
        public List<InvoiceDues> GetInvoicesDues()
        {
            /*sort profiles according to their ids then convert to list type*/
            //logger.createLog("Get operation: InvoiceDues list is fetched.");

            return dbOperationInvoicesDues.GetInvoiceDues();
        }


        [HttpGet]
        [ActionName("GetMessages")]
        public List<Message> GetMessages()
        {
            /*sort profiles according to their ids then convert to list type*/
            //logger.createLog("Get operation: Messages list is fetched.");

            return dbOperationMessages.GetMessage();
        }

        /*HTTP post request method*/
        [HttpPost]
        [ActionName("AddApartment")]
        public Result AddApartment([FromBody] Apartment newProfile)
        {

            Apartment usr = dbOperationApartment.FindApartment(newProfile.resident, newProfile.block, newProfile.apartmentNo);

            /*new profile is in the list already?*/
            bool userCheck = (usr != null) ? true : false;

            Result result = new Result();

            if (userCheck == false)
            {

                if (dbOperationApartment.AddModel(newProfile) == true)
                {
                    /*If there is no same id in list, add new profile*/
                    result.HttpStatusCode = Ok().StatusCode; //Successfully added.
                    result.Message = "New apartment with " + newProfile.id + " id is added.";
                    //logger.createLog("Success add operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
                }
                else
                {
                    /*If there is an error while adding*/
                    result.HttpStatusCode = BadRequest().StatusCode; //error code
                    result.Message = "Apartment with " + newProfile.id + " id cannot added.";
                    //logger.createLog("Error add operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
                }

            }
            else
            {
                /*If this apartment already exists*/
                result.HttpStatusCode = BadRequest().StatusCode; //error code
                result.Message = "Apartment with " + usr.id + " id already exists.";
            }

            return result;
        }

        [HttpPost]
        [ActionName("AddResident")]
        public Result AddResident([FromBody] Resident newProfile)
        {

            Resident usr = dbOperationResident.FindResident(newProfile.tcNo);

            /*new profile is in the list already?*/
            bool userCheck = (usr != null) ? true : false;

            Result result = new Result();

            if (userCheck == false)
            {

                if (dbOperationResident.AddModel(newProfile) == true)
                {
                    /*If there is no same id in list, add new profile*/
                    result.HttpStatusCode = Ok().StatusCode; //Successfully added.
                    result.Message = "New resident with " + newProfile.id + " id is added.";
                    //logger.createLog("Success add operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
                }
                else
                {
                    /*If there is an error while adding*/
                    result.HttpStatusCode = BadRequest().StatusCode; //error code
                    result.Message = "Resident with " + newProfile.id + " id cannot added.";
                    //logger.createLog("Error add operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
                }

            }
            else
            {
                /*If this resident already exists*/
                result.HttpStatusCode = BadRequest().StatusCode; //error code
                result.Message = "Resident with " + usr.id + " id already exists.";
            }

            return result;
        }

        [HttpPost]
        [ActionName("AddInvoiceDues")]
        public Result AddInvoiceDues([FromBody] InvoiceDues newProfile)
        {

            //InvoiceDues usr = dbOperationInvoicesDues.FindInvoiceDues(newProfile.apartmentId);

            /*new profile is in the list already?*/
            //bool userCheck = (usr != null) ? true : false;

            Result result = new Result();

            //if (userCheck == false)
            //{

                if (dbOperationInvoicesDues.AddModel(newProfile) == true)
                {
                    /*If there is no same id in list, add new profile*/
                    result.HttpStatusCode = Ok().StatusCode; //Successfully added.
                    result.Message = "New invoiceDues with " + newProfile.id + " id is added.";
                //logger.createLog("Success add operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }
            else
                {
                    /*If there is an error while adding*/
                    result.HttpStatusCode = BadRequest().StatusCode; //error code
                    result.Message = "InvoiceDues with " + newProfile.id + " id cannot added.";
                    //logger.createLog("Error add operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }

            /* }
             else
             {
                 /*If this invoiceDues already exists*//*
                 result.HttpStatusCode = BadRequest().StatusCode; //error code
                 result.Message = "InvoiceDues with " + newProfile.id + " id already exists.";
             }
             */
            return result;
        }

        [HttpPost]
        [ActionName("AddMessage")]
        public Result AddMessage([FromBody] Message newProfile)
        {

            //Message usr = dbOperationMessages.FindMessage(newProfile.id);

            /*new profile is in the list already?*/
            //bool userCheck = (usr != null) ? true : false;

            Result result = new Result();

            //if (userCheck == false)
            //{

                if (dbOperationMessages.AddModel(newProfile) == true)
                {
                    /*If there is no same id in list, add new profile*/
                    result.HttpStatusCode = Ok().StatusCode; //Successfully added.
                    result.Message = "New message with " + newProfile.id + " id is added.";
                    //logger.createLog("Success add operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }
            else
                {
                    /*If there is an error while adding*/
                    result.HttpStatusCode = BadRequest().StatusCode; //error code
                    result.Message = "Message with " + newProfile.id + " id cannot added.";
                    //logger.createLog("Error add operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }

            /*}
            else
            {
                /*If this message already exists*//*
                result.HttpStatusCode = BadRequest().StatusCode; //error code
                result.Message = "Message with " + newProfile.id + " id already exists.";
            }
            */
            return result;
        }


        /*HTTP put request method*/
        [HttpPut]
        [ActionName("UpdateApartment")]
        public Result UpdateApartment(int id, [FromBody] Apartment updatedProfile)
        {
            Console.WriteLine(id);
            Console.WriteLine(updatedProfile);
            Result result = new Result();

            //fetch the whole list from db
            List<Apartment> userList = dbOperationApartment.GetApartment();

            /*If desired profile is found from list, update it*/
            Apartment? _oldValue = userList.Find(o => o.id == id);
            if (_oldValue != null)
            {
                dbOperationApartment.DeleteModel(_oldValue.id);
                dbOperationApartment.AddModel(updatedProfile);

                result.HttpStatusCode = Ok().StatusCode; //Successfully updated.
                result.Message = "Apartment with " + _oldValue.id + " is updated.";
                //logger.createLog("Success update operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }
            else
            {
                result.HttpStatusCode = BadRequest().StatusCode; //error code
                result.Message = "There is no apartment with " + id + " id.";
                //logger.createLog("Error update operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }
            return result;
        }

        [HttpPut]
        [ActionName("UpdateResident")]
        public Result UpdateResident(int id, [FromBody] Resident updatedProfile)
        {
            Result result = new Result();

            //fetch the whole list from db
            List<Resident> userList = dbOperationResident.GetResident();

            /*If desired profile is found from list, update it*/
            Resident? _oldValue = userList.Find(o => o.id == id);
            if (_oldValue != null)
            {
                dbOperationResident.DeleteModel(_oldValue.id);
                dbOperationResident.AddModel(updatedProfile);

                result.HttpStatusCode = Ok().StatusCode; //Successfully updated.
                result.Message = "Resident with " + _oldValue.id + " is updated.";
                //logger.createLog("Success update operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }
            else
            {
                result.HttpStatusCode = BadRequest().StatusCode; //error code
                result.Message = "There is no resident with " + id + " id.";
                //logger.createLog("Error update operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }
            return result;
        }

        [HttpPut]
        [ActionName("UpdateMessage")]
        public Result UpdateMessage(int id, [FromBody] Message updatedProfile)
        {
            Result result = new Result();

            //fetch the whole list from db
            List<Message> userList = dbOperationMessages.GetMessage();

            /*If desired profile is found from list, update it*/
            Message? _oldValue = userList.Find(o => o.id == id);
            if (_oldValue != null)
            {
                dbOperationMessages.DeleteModel(_oldValue.id);
                dbOperationMessages.AddModel(updatedProfile);

                result.HttpStatusCode = Ok().StatusCode; //Successfully updated.
                result.Message = "Message with " + _oldValue.id + " is updated.";
                //logger.createLog("Success update operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }
            else
            {
                result.HttpStatusCode = BadRequest().StatusCode; //error code
                result.Message = "There is no message with " + id + " id.";
                //logger.createLog("Error update operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }
            return result;
        }

        /*HTTP delete request method*/
        [HttpDelete]
        [ActionName("DeleteApartment")]
        public Result DeleteApartment(int id)
        {
            Result result = new Result();

            /*If desired profile is found from list, delete it*/
            if (dbOperationApartment.DeleteModel(id))
            {
                result.HttpStatusCode = Ok().StatusCode; //Successfully deleted
                result.Message = "Apartment with " + id + " id is deleted.";

                //logger.createLog("Success deletion operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }
            else
            {
                result.HttpStatusCode = BadRequest().StatusCode; //error code
                result.Message = "There is no apartment with " + id + " id.";
                //logger.createLog("Error deletion operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }
            return result;
        }

        [HttpDelete]
        [ActionName("DeleteResident")]
        public Result DeleteResident(int id)
        {
            Result result = new Result();

            /*If desired profile is found from list, delete it*/
            if (dbOperationResident.DeleteModel(id))
            {
                result.HttpStatusCode = Ok().StatusCode; //Successfully deleted
                result.Message = "Resident with " + id + " id is deleted.";

                //logger.createLog("Success deletion operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }
            else
            {
                result.HttpStatusCode = BadRequest().StatusCode; //error code
                result.Message = "There is no resident with " + id + " id.";
                //logger.createLog("Error deletion operation: " + result.Message + "\tStatus Code: " + result.HttpStatusCode);
            }
            return result;
        }
    }
}