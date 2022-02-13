using System;
using DAL.Model;
using Entities;


namespace SiteManagementSystem.Controllers
{
    public class DBOperationApartment
    {
        private SiteManagementUserContext _context = new SiteManagementUserContext();

        //Logger logger = new Logger();

        public bool AddModel(Apartment _apartment)
        {
            try
            {
                _context.Apartment.Add(_apartment);
                _context.SaveChanges();

                return true;
            }
            catch (Exception exc)
            {
                //logger.createLog("Error add operation: " + exc.Message + "\tStatus Code: " + BadRequest().StatusCode);
                Exception x = exc;
                return false;
            }
        }

        public List<Apartment> GetApartment()
        {
            //fetch all profiles from db
            List<Apartment> apartments = new List<Apartment>();
            apartments = _context.Apartment.OrderBy(m => m.id).ToList<Apartment>();
            return apartments;
        }

        public Apartment FindApartment(string resident ="", string block = "", int apartmentNo = 0, int id=0)
        {
            Apartment? user = new Apartment();

            if (!string.IsNullOrEmpty(resident) && !string.IsNullOrEmpty(block) && apartmentNo > 0)
                user = _context.Apartment.FirstOrDefault(m => m.resident == resident && m.block == block && m.apartmentNo == apartmentNo);
            else if (id > 0)
            {
                user = _context.Apartment.FirstOrDefault(m => m.id == id);
            }
            return user;
        }

        public bool DeleteModel(int Id)
        {
            try
            {
                _context.Apartment.Remove(FindApartment("", "", 0, Id));
                _context.SaveChanges();
                return true;
            }
            catch (Exception exc)
            {
                //logger.createLog("HATA " + exc.Message);
                return false;
            }
        }
    }
}
