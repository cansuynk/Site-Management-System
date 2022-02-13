using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Model
{
    public class Resident
    {
        [System.ComponentModel.DataAnnotations.Key]
        public int id { get; set; }

        public string name { get; set; }

        public string surname { get; set; }

        public string block { get; set; }

        public int apartmentNo { get; set; }

        public string tcNo { get; set; }

        public string email { get; set; }

        public string password { get; set; }

        public string phone { get; set; }

        public string numberPlate { get; set; }
    }
}
