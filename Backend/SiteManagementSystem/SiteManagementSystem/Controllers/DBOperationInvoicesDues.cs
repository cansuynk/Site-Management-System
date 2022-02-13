using DAL.Model;
using Entities;

namespace SiteManagementSystem.Controllers
{
    public class DBOperationInvoicesDues
    {
        private SiteManagementUserContext _context = new SiteManagementUserContext();

        //Logger logger = new Logger();

        public bool AddModel(InvoiceDues _invoicesDues)
        {
            try
            {
                _context.InvoiceDues.Add(_invoicesDues);
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

        public List<InvoiceDues> GetInvoiceDues()
        {
           
            List<InvoiceDues> invoicesDues = new List<InvoiceDues>();
            invoicesDues = _context.InvoiceDues.OrderBy(m => m.id).ToList<InvoiceDues>();
            return invoicesDues;
        }

        public InvoiceDues FindInvoiceDues(int id = 0)
        {
            InvoiceDues? user = new InvoiceDues();
            if (id > 0)
            {
                user = _context.InvoiceDues.FirstOrDefault(m => m.id == id);
            }
            return user;
        }

        public bool DeleteModel(int Id)
        {
            try
            {
                _context.InvoiceDues.Remove(FindInvoiceDues(Id));
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
