using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Model
{
    public class InvoiceDues
    {
        [System.ComponentModel.DataAnnotations.Key]
        public int id { get; set; }

        public int apartmentId { get; set; }

        public string debtType { get; set; }

        public int debt { get; set; }

        public int month { get; set; }

        public int year { get; set; }

        public bool status { get; set; }
    }
}
