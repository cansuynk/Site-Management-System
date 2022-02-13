using DAL.Model;
using Entities;

namespace SiteManagementSystem.Controllers
{
    public class DBOperationMessages
    {
        private SiteManagementUserContext _context = new SiteManagementUserContext();

        Logger logger = new Logger();

        public bool AddModel(Message _message)
        {
            try
            {
                _context.Message.Add(_message);
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

        public List<Message> GetMessage()
        {

            List<Message> message = new List<Message>();
            message = _context.Message.OrderBy(m => m.id).ToList<Message>();
            return message;
        }

        public Message FindMessage(int id = 0)
        {
            Message? user = new Message();
            if (id > 0)
            {
                user = _context.Message.FirstOrDefault(m => m.id == id);
            }
            return user;
        }

        public bool DeleteModel(int Id)
        {
            try
            {
                _context.Message.Remove(FindMessage(Id));
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
