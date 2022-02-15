namespace SiteManagementSystem.Models
{
    public class CreditCardDatabaseSettings
    {
        //db configurations class
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string CreditCardsCollectionName { get; set; } = null!;
    }
}
