using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Model
{
    public class Message
    {
        [System.ComponentModel.DataAnnotations.Key]
        public int id { get; set; }

        public int residentId { get; set; }

        public string message { get; set; }

        public bool status { get; set; }

        public string time { get; set; }


    }
}
