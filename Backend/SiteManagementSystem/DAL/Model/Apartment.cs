using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class Apartment
    {
        [System.ComponentModel.DataAnnotations.Key]
        public int id { get; set; }

        public string block { get; set; }

        public string status { get; set; }

        public string type { get; set; }

        public int floor { get; set; }

        public int apartmentNo { get; set; }

        public string ownerOrTenant { get; set; }

        public string resident { get; set; }

    }
}
