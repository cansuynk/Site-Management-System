using DAL.Model;
using Entities;

namespace SiteManagementSystem.Controllers
{
    public class DBOperationResident
    {
        private SiteManagementUserContext _context = new SiteManagementUserContext();

        //Logger logger = new Logger();

        public bool AddModel(Resident _resident)
        {
            try
            {
                _context.Resident.Add(_resident);
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

        public List<Resident> GetResident()
        {

            List<Resident> resident = new List<Resident>();
            resident = _context.Resident.OrderBy(m => m.id).ToList<Resident>();
            return resident;
        }

        public Resident FindResident(string tcNo = "", int id = 0)
        {
            Resident? user = new Resident();
            if (!string.IsNullOrEmpty(tcNo))
                user = _context.Resident.FirstOrDefault(m => m.tcNo == tcNo);
            
            else if (id > 0)
            {
                user = _context.Resident.FirstOrDefault(m => m.id == id);
            }
            return user;
        }

        public bool DeleteModel(int Id)
        {
            try
            {
                _context.Resident.Remove(FindResident("", Id));
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
