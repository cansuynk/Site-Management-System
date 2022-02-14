using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SiteManagementSystem.Models
{
    public class CreditCard
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        //[BsonElement("residentId")]
        public int? residentId { get; set; }

        public string type { get; set; }

        public string number { get; set; }

        public string securityNum { get; set; }

        public int month { get; set; }

        public int year { get; set; }
    }
}
